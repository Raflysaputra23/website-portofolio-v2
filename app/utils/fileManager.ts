import axios from "axios";



const fileManager = (file: File) => {
    return new Promise(async (resolve, reject) => {
        try {
            const formData = new FormData();
            formData.append("fileToUpload", file);
            formData.append("userhash", "");
            formData.append("reqtype", "fileupload");
            const { data } = await axios.post("https://catbox.moe/user/api.php", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            resolve(data);
        } catch(error) {
            reject(error);
        }
    })
} 

export default fileManager;