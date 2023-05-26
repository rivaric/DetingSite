import { useState } from 'react'
import './UploadPhotosBtn.scss'
import img from './camera-svgrepo-com (1).svg'
import api from '../../http';

export default function UploadPhotosBtn() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState(null);

    const handleChange = (e) => {
        console.log(e.target.files);
        setSelectedFile(e.target.files[0])
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Пожалйста выберите файл');
            return;
        };

        let formData = new FormData();
        formData.append('file', selectedFile);

        const respons = api.post('/upload', formData, {
            header: {
                "Content-Type": 'multiplay/form-data'
            }
        })

        console.log(respons.data);

        setUploaded(respons.data);
    }

    return (
        <>
            <label className="uploadPhotosBtn">
                <img src={img} alt="" />
                <input 
                    type="file"
                    className='hidden'
                    accept='image/*,.png,.jpg,.gif,.web'    
                    onChange={handleChange}
                />
            </label>
            {/* <button onClick={handleUpload}>Отправить</button> */}
        </>
    )
}