import { createData, readRealTime } from "@/app/config/database";
import { validasiToken } from "@/app/utils/token";


export const GET = async (req: Request) => {
    try {
        const data = await readRealTime();
        console.log(data);
        return new Response(JSON.stringify({ message: "Success", data, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
    } catch(data) {
        console.log(data);
        return new Response(JSON.stringify({ message: "Success", data, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
    }
}
export const POST = async (req: Request) => {
    try {
        const token = req?.headers?.get("authorization")?.split(" ")[1];
        if(!token) return new Response(JSON.stringify({ message: "Token not found", status: 401 }), { status: 401 });    
        await validasiToken(token);

        const formData = await req.json(); 
        await createData(formData);
        return new Response(JSON.stringify({ message: "Success", data: formData, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
    } catch(error) {
        console.log(error);
        return new Response(JSON.stringify({ message: "Internal Server Error", data: error, status: 500 }), { status: 500, headers: { "Content-Type": "application/json" }});
    }
}