import React, { useState } from "react";

export default function FileUploadModule(){

    const [file, setFile] = useState();
    const [error, setError] = useState("");
    const [preview, setPreview] = useState("");
    
    const handleFileUpload =()=>{
         if (file && file.type === "image/png") {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                setPreview(
                    reader.result
                )
            }
        }else{
            setError("Please upload correct format");
        }
    }
    
    return(
        <div>
            <h2>File upload module</h2>
            {error && (<span style={{color:"red"}}>{error}</span>)}
            <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="button" name="upload" onClick={handleFileUpload}>Upload</button>
            <br />
            <br />
            <br />
            {preview && <img src={preview} alt="Preview" width={200} />}
        </div>
    )

}