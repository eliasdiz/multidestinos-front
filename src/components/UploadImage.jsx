// src/components/UploadImage.js
import { useState } from "react";
import storage from "../firebase.js";
// import { storage } from "../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function UploadImage() {
const [file, setFile] = useState(null);
const [progress, setProgress] = useState(0);
const [url, setUrl] = useState("");

const handleFileChange = (e) => {
    setFile(e.target.files[0]);
};

const handleUpload = () => {
    if (!file) return alert("Selecciona una imagen");

    // Crear referencia en Firebase Storage
    const storageRef = ref(storage, `images/${file.name}`);

    // Subir archivo con progreso
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
    "state_changed",
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
    },
    (error) => {
        console.error("Error al subir imagen:", error);
    },
    async () => {
        // Obtener URL de descarga
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadURL);
    }
    );
};

return (
    <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Subir</button>
        <p>Progreso: {progress.toFixed(2)}%</p>
        {url && <img src={url} alt="Subida" width={200} />}
    </div>
);
}
