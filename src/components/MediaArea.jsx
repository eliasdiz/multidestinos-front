import React, { useCallback, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { UploadSimple, XCircle } from "@phosphor-icons/react";
import { ref, uploadBytesResumable, getDownloadURL, getStorage, listAll, deleteObject } from "firebase/storage";
import storage from "../firebase.js"
import toast from 'react-hot-toast'



export default function MediaArea({ onFileChange }) {

    const [files, setFiles] = useState([]);
    const [uploadingFiles, setUploadingFiles] = useState([])
    const [uploadProgress, setUploadProgress] = useState({})

    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles((prevFiles) => {
                const newFiles = acceptedFiles.filter((file) =>
                    !prevFiles.some((existingFile) => existingFile.name === file.name)
                );
                if (newFiles.length > 0) {
                    onFileChange([...prevFiles, ...newFiles]);
                    return [...prevFiles, ...newFiles];
                }
                return prevFiles;
            });
        },
        [onFileChange]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [".jpeg", ".jpg", ".png", ".gif"] },
    });

    const removeFile = (file) => {
        const newFiles = files.filter((f) => f !== file);
        setFiles(newFiles);
        onFileChange(newFiles);
    };

    const previewUrls = useMemo(
        () => files.map((file) => URL.createObjectURL(file)),
        [files]
    );

    const uploadImageToFirebase = (file) => {
        // Crear referencia en Firebase Storage
        const storageRef = ref(storage, `images/${file.name}`);
        
        // Subir archivo con progreso
        const uploadTask = uploadBytesResumable(storageRef, file);

        setUploadingFiles((prev) => [...prev, file.name]);
        setUploadProgress((prev) => ({
            ...prev,
            [file.name]: { progress: 0, status: "subiendo" }, // inicializar el progreso
        }));

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress((prev) => ({
                    ...prev,
                    [file.name]: { progress: progress.toFixed(2), status: "subiendo" },
                }));
            },
            (error) => {
                console.error("Error al subir imagen:", error);
                setUploadProgress((prev) => ({
                    ...prev,
                    [file.name]: { progress: 0, status: "error" },
                }));
                toast.error("Error al subir la imagen",{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}});
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log("Imagen subida con éxito: ", downloadURL);

                setUploadingFiles((prev) => prev.filter((name) => name !== file.name));

                // Actualizamos el estado con la URL de descarga
                onFileChange((prevFiles) =>
                    prevFiles.map((f) =>
                        f.name === file.name ? { ...f, url: downloadURL } : f
                    )
                );

                // Actualizamos el progreso y el estado
                setUploadProgress((prev) => ({
                    ...prev,
                    [file.name]: { progress: 100, status: "completo" },
                }));

                // Mensaje de éxito
                toast.success("Imagen subida con éxito!",{style:{backgroundColor:'#385e86e3',textTransform:'capitalize',color:'white'}});
            }
        );
    };

    const deleteAllImages = async (folderPath) => {
        const storage = getStorage();
        const folderRef = ref(storage, folderPath);
    
        try {
            const result = await listAll(folderRef);
            const deletePromises = result.items.map((fileRef) => deleteObject(fileRef));
            await Promise.all(deletePromises);
            console.log("Todas las imágenes han sido eliminadas.");
        } catch (error) {
            console.error("Error eliminando imágenes:", error);
        }
    };

    const handleUpload = async () => {
        // const folderPath = 'https://firebasestorage.googleapis.com/v0/b/multidestinos-chatbot.firebasestorage.app/o/images/'
        const folderPath = 'gs://multidestinos-chatbot.firebasestorage.app/images'
        await deleteAllImages(folderPath)
        files.forEach((file) => {
            uploadImageToFirebase(file)
        })
    }

    return (
        <div className="w-full">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed border-white rounded-md p-4 text-center cursor-pointer transition-colors ${
                    isDragActive ? "bg-blue-100" : "bg-transparent"
                }`}
            >
                <input {...getInputProps()} />
                <UploadSimple className="mx-auto text-white mb-2" size={24} />
                <p className="text-white">
                    {isDragActive
                        ? "Suelta los archivos aquí..."
                        : "Arrastra y suelta imágenes aquí, o haz clic para seleccionarlas"}
                </p>
            </div>

            {
                files.length > 0 && (
                    <div className="max-h-[15rem] flex flex-wrap justify-center overflow-y-auto p-2 gap-4">
                        {previewUrls.map((url, index) => (
                            <div
                                key={files[index].name}
                                className="relative h-[10rem] w-[8rem] flex-shrink-0 group"
                            >
                                <img
                                    src={url || "/placeholder.svg"}
                                    alt={files[index].name}
                                    className="object-cover rounded-lg w-full h-full"
                                />
                                <button
                                    onClick={() => removeFile(files[index])}
                                    className="absolute top-1 right-1 bg-red-500  text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <XCircle size={16} />
                                </button>

                                {/* Mostrar el progreso de subida */}
                                {uploadProgress[files[index].name]?.status === "subiendo" && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black opacity-50 text-white text-xs p-1">
                                        Subiendo: {uploadProgress[files[index].name].progress}%
                                    </div>
                                )}
                                {uploadProgress[files[index].name]?.status === "completo" && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-green-500 opacity-75 text-white text-xs p-1">
                                        ¡Completado!
                                    </div>
                                )}
                            </div>
                        ))}
                        <div
                            className="h-[10rem] w-[8rem] flex justify-center items-center border rounded-lg capitalize cursor-pointer"
                            onClick={handleUpload}
                        >
                            <UploadSimple color="white" weight="duotone" size={60} />
                        </div>
                    </div>
                )
            }
        </div>
    );
}
