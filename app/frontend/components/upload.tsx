import { useState } from "react"

export default function upload(){
        const [file, setFile] = useState<File | null>(null);
        const [uploadStatus, setUploadStatus] = useState({
            isUploading: false,
            success: false,
        });
        const [selected, setSelectedStatus] = useState(false);
    

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            setFile(selectedFile);
            setSelectedStatus(true)
        }
    }

    const handleUpload = async () => {
        if(!file) return;
        setSelectedStatus(false);
        setUploadStatus({...uploadStatus, isUploading: true})

        setTimeout(() =>{
            setUploadStatus({...uploadStatus, isUploading: false, success: true});
            setFile(null);
        }, 2000);
    };

    const handleRemove = () => {
        setFile(null);
    }

    return(
        <div className="container">
      {!uploadStatus.success && (
        <div className="input-wrapper">
          <input
            type="file"
            id="hiddenFileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {!file && (
            <button
              className="upload-btn"
              onClick={() =>
                document.getElementById("hiddenFileInput")?.click()
              }
            >
              Select File
            </button>
          )}
        </div>
      )}

      {file && (
        <div className="upload-wrapper">
          <div className="upload-container">
            <div className="file-info">
              {selected && <div className="success-checkmark" />}

              {uploadStatus.isUploading && <div className="loader" />}
              <div className="file-text">
                <span className="file-name">{file.name}</span>
              </div>
            </div>
            <div className="remove-btn" onClick={handleRemove}>
              ×
            </div>
          </div>
          <button className="upload-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>
      )}

      {uploadStatus.success && (
        <div className="success-wrapper">
          <div className="success-checkmark" />
          <p style={{ color: "black" }}>File uploaded successfully</p>
        </div>
      )}
    </div>
  );
};
