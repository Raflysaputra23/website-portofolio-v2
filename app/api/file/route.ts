import fileManager from "@/app/utils/fileManager";
import { validasiToken } from "@/app/utils/token";



export const POST = async (req: Request) => {
    try {
        const token = req?.headers?.get("authorization")?.split(" ")[1];
        if(!token) return new Response(JSON.stringify({ message: "Token not found", status: 401 }), { status: 401 });    
        await validasiToken(token);

        const formData = await req.formData();
        const file = formData.get("file") as File;
        const response = await fileManager(file);
        return new Response(JSON.stringify({ message: "Success", data: response, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
    } catch(error) {
        return new Response(JSON.stringify({ message: "Unauthorized", data: error, status: 500 }), { status: 500, headers: { "Content-Type": "application/json" }});
    }
}