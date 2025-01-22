import fileManager from "@/app/utils/fileManager";
import { validasiToken } from "@/app/utils/token";

export const config = {
    api: {
        bodyParser: false
    }
}

export const POST = async (req: Request) => {
    try {
        const token = req?.headers?.get("authorization")?.split(" ")[1];
        if(!token) return new Response(JSON.stringify({ message: "Token not found", status: 401 }), { status: 401 });    
        await validasiToken(token);

        const formData: FormData = await req.formData();
        console.log(formData);
        const file = formData.get("file") as File;
        console.log(file)
        const response = await fileManager(file);
        return new Response(JSON.stringify({ message: "Success", data: response, status: 200 }), { status: 200, headers: { "Content-Type": "application/json" }});
    } catch(error) {
        console.log(error);
        return new Response(JSON.stringify({ message: "Unauthorized", data: error, status: 500 }), { status: 500, headers: { "Content-Type": "application/json" }});
    }
}