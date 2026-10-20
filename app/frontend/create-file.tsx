import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const FILE_TYPES = ["PDF", "DOC", "DOCX", "PNG", "JPEG"];

export default function CreateFile() {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (incoming: File | File[]) =>
        setFile(Array.isArray(incoming) ? incoming[0] : incoming);

    return (
        <div className="w-full">
            <FileUploader handleChange={handleChange} name="file" types={FILE_TYPES} />
            {file && <p>Selected: {file.name}</p>}
        </div>
    );
}
