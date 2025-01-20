
import app from "./firebase";
import { addDoc, collection, deleteDoc, doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

const create = async (koleksi: string, data: any) => {
    try {
        await addDoc(collection(db, koleksi), data);
        return "success";
    } catch(error) {

        return "error";
    }
}

const readAll = (koleksi: string, callback: Function) => {
    try {
        const q = collection(db, koleksi);
        onSnapshot(q, (snapshot) => {
            const datas = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            const change = snapshot.docChanges().map((doc) => ({type: doc.type, id: doc.doc.id, ...doc.doc.data()}));
            callback(datas, change);
        });
    } catch(error) {
        return "error";
    }
}

const readSingle = (koleksi: string, id: string, callback: Function) => {
    try {
        const docRef = doc(db, koleksi, id);
        onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                console.log("Real-time document data:", doc.data());
                callback({ id: doc.id, ...doc.data() });
            } else {
                console.log("No such document!");
                callback(null);
            }
        });
    } catch(error) {
        return "error";
    }
}

const update = async (koleksi: string, id: string, data: any) => {
    try {
        const docRef = doc(db, koleksi, id);
        await updateDoc(docRef, data);
        return "success";
    } catch(error) {
        return "error";
    }
}

const remove = async (koleksi: string, id: string) => {
    try {
        const docRef = doc(db, koleksi, id);
        await deleteDoc(docRef);
        return "success";
    } catch(error) {
        return "error";
    }
}

export { create, readAll, readSingle, update, remove };