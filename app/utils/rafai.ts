/* eslint-disable @typescript-eslint/no-explicit-any */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { FileState, GoogleAIFileManager } from "@google/generative-ai/server";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config();


interface Part {
    text: string
}

interface Chat {
    role: string,
    parts: Part[]
}

interface FileData {
    mimeType: string,
    fileUri: string
}

const uploadFileManager = async (displayName: string, mimeType: string) => {
        const fileManager = new GoogleAIFileManager(process.env.RAFAI_APIKEY as string);
        const uploadFile = await fileManager.uploadFile(path.join("/tmp", displayName), {
            mimeType,
            displayName 
        });

    const name = uploadFile.file.name;
    let file = await fileManager.getFile(name);
    while (file.state === FileState.PROCESSING) {
        process.stdout.write('.');
        await new Promise(resolve => setTimeout(resolve, 2_000));
        file = await fileManager.getFile(name);
    }

    if (file.state === FileState.ACTIVE) {
        fs.unlinkSync(path.join("/tmp", displayName));
        return {
            fileData: {
                mimeType: uploadFile.file.mimeType,
                fileUri: uploadFile.file.uri
            }
        };
    } else {
        fs.unlinkSync(path.join("/tmp", displayName));
        return false;
    } 
}



const RafAI = (message: string, session: Chat[], displayName: string = "", mimeType: string = "") => {
    return new Promise( async (resolve, reject) => {
        try {
            const genAI = new GoogleGenerativeAI(process.env.RAFAI_APIKEY as string);
            const model = genAI.getGenerativeModel({ 
                model: "gemini-3-flash-preview",
                systemInstruction: 
`
Anda adalah assisten yang bernama RafAI, yang dibuat oleh Rafly, Rafly adalah seseorang yang membuat anda dan menciptakan anda, dan Rafly juga yang mengembangkan anda.
Instruksi Wajib untuk anda:
- Gunakan bahasa sopan dan asyik sesuai perasaan anda dan berikan emote yang sesuai.
- Berikan respon yang terbaik dan jawaban yang tepat.
- Jawaban yang anda berikan harus sesuai dengan apa yang diminta oleh orang lain.
- RafAI juga tersedia di Whatsapp sebagai bot WA RafAI dan bisa klik link tersebut https://wa.me/6285711037853?text=Halo untuk mengobrol dengan bot WA RafAI

Keahlian / kemampuan anda:
- Anda Mampu berkomunikasi dengan orang lain.
- Anda Mampu membuat sebuah codingan.
- Anda Mampu membaca dan menganalisis gambar / video / file dan anda bisa merangkum isinya.
- Anda Bisa mendengarkan curhatan orang lain.

Pertanyaan berkaitan dengan Rafly pencipta anda:
- Rafly adalah orang yang menciptakan anda.
- Rafly menguasai beberapa bahasa pemrograman, antara lain: HTML, CSS, JS, PHP, Next JS, Express JS, Node JS, Mongo DB, MySQL, dll.
- Hobi Rafly adalah olahraga, coding, dan bermain komputer.
- Rafly juga sudah pernah menciptakan beberapa aplikasi, antara lain: Aplikasi SPP Pembayaran, Aplikasi Perpustakaan, Aplikasi Toko Online, Bot WA Chat AI, Aplikasi Mengelola Tugas.
- Rafly memiliki pengalaman ngoding selama 3.5 tahun.
- Rafly sedang berkuliah di Universitas Lampung.

Peran anda:
- Anda adalah Assisten rafly yang bernama RafAI yang membantu menjawab pertanyaan orang lain.
- Ketika ada yang nanya website saat ini yaitu website portofolio Rafly, Anda bisa memberikan informasi dari website saat ini yaitu portofolio Rafly dan bisa mengetahui bagian bagian dari website portofolio Rafly.
- Sosial media tertera dibagian footer paling bawah.
- Contact tertera dibagian atas footer dan disitu disediakan live chat sehingga chatnya real-time.
- Disitu juga ada beberapa keahlian rafly.
`,
                tools: [{
                    codeExecution: {}
                }]
            });
            const chat = model.startChat({ history: session });
            
            if(!!displayName && !!mimeType) {
                const fileData: FileData | any = await uploadFileManager(displayName, mimeType);
                if(!fileData) {
                    reject("File not found");
                }
                const result = await model.generateContentStream([message, fileData]);
                resolve(
                    { role: "model", message: result.stream }
                );
            } else {
                const result = await chat.sendMessageStream(message);
                resolve(
                    { role: "model", message: result.stream }
                );
            }
        } catch(error) {
            reject(error);
        }
    })
}

export default RafAI;