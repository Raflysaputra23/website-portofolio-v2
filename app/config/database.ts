import { addDoc, collection, getFirestore, onSnapshot } from "firebase/firestore";
import app from "./firebase";


const db = getFirestore(app);

const readRealTime = () => {
    return new Promise((resolve, reject) => {
        onSnapshot(collection(db, "message"), (snapshot) => {
            if(snapshot.empty) {
                reject([]);
            } else {
                resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        });
    })
}

const createData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await addDoc(collection(db, "message"), data);
            resolve("Data berhasil disimpan");
        } catch (error) {
            reject("Data gagal disimpan");
        }
    });
}

export { readRealTime, createData };