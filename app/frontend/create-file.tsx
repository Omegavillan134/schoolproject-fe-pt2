import React from "react";
import { useState } from "react";

export default function create_file() {

    const [error, setError] = useState('');
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const files: FileList = event.dataTransfer.files;
        if (files.length > 0){
            const file: File = files[0];
            console.log("Selected file" + file.name);
        }
    }
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };


    return(
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
        >
        Drag And Drop Your files here
        </div>
    )
}

