/* eslint-disable @typescript-eslint/no-explicit-any */
import RafAI from "@/app/utils/rafai";
import { validasiToken } from "@/app/utils/token";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const POST = async (req: Request) => {
    try {
        const token = req?.headers?.get("authorization")?.split(" ")[1];
        if(!token) return new Response(JSON.stringify({ message: "Token not found", status: 401 }), { status: 401 });    
        await validasiToken(token);
        
        const formData: FormData = await req.formData();
        const chat: string | null = formData.get("chat") as string;
        const session: string | null = formData.get("session") as string;
        const file: File | null = formData.get("file") as File;
        if(!chat) return new Response(JSON.stringify({ message: "Message not found", status: 401 }), { status: 401 });
        if(!session) return new Response(JSON.stringify({ message: "Session not found", status: 401 }), { status: 401 });
        const newSession = JSON.parse(session).map((item: any) => ({ role: item.role, parts:[{ text: item.message }] }));
        
        if(file) {
            const date: number = Date.now();
            const fileName: string = `Upload-${date}-${file.name}`;
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(path.join(__dirname, `../../uploads/${fileName}`), buffer);
            const response = await RafAI(chat, newSession, fileName, file.type);
            return new Response(JSON.stringify({ message: "Success", data: response, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
        } else {
            const response = await RafAI(chat, newSession);
            return new Response(JSON.stringify({ message: "Success", data: response, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
        }
        
    } catch(error) {
        console.log(error);
        return new Response(JSON.stringify({ message: "Unauthorized", status: 401 }), { status: 401 });
    }
}