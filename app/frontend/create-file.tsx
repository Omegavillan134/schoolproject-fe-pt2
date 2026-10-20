import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import type { InputHTMLAttributes } from 'react'

const FILE_TYPES = ["PDF", "DOC", "DOCX", "PNG", "JPEG"]

export default function create_file() {
    const [file, setFile] = useState<File | null>(null);
    const handleChange = (incoming: File | File[]) => setFile(Array.isArray(incoming) ? incoming[0] : incoming)

    return(
        <div className="container">
            <FileUploader handleChange={handleChange} name="file" types={FILE_TYPES} />
            {file && <p>Selected: {file.name}</p>}
        </div>
    )
}

