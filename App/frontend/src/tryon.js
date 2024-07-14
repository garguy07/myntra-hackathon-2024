// src/TrendAI.js
import React, { useState } from 'react';
import './tryon.css';
import Navbar from './navbar';

function TryOn() {
    const [selectedImage, setSelectedImage] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedImageName, setUploadedImageName] = useState('');

    const handleFashionateClick = () => {
        alert(`Virtually trying on... `);
    };

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl); // Store the uploaded image URL
            setUploadedImageName(file.name); // Store the uploaded image name
            alert(`Uploaded Image: ${file.name} successfully!`); // Alert on successful upload
        }
    };

    const images = [
        require('./assets/item1.jpg'),
        require('./assets/item2.jpg'),
        require('./assets/item3.jpg'),
        require('./assets/item4.jpg')
    ];

    return (
        <>
            <div>
                <Navbar />
                <div className="tryon-page">
                    <h1 className='tryon-title'>TryOn</h1>
                    <p className='tryon-subtitle'>
                        Upload your own full-length photo. Choose your favorite clothing from the given set of garments. Click Fashionate to see how awesome it would look on you!
                    </p>
                    
                    <div className="image-selection">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Item ${index + 1}`}
                                className={`selectable-image ${selectedImage === image ? 'selected' : ''}`}
                                onClick={() => handleImageSelect(image)}
                            />
                        ))}
                    </div>

                    {/* Combined Upload Button */}
                    <div className="upload-container">
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            id="file-input" 
                            style={{ display: 'none' }} // Hide default file input
                        />
                        <label 
                            htmlFor="file-input" 
                            className="upload-button" 
                            style={{ marginBottom: '20px' }}
                        >
                            {uploadedImage ? "Change Full-Length Image" : "Upload Full-Length Image"}
                        </label>
                        {uploadedImageName && (
                            <p className="uploaded-image-name">
                                Uploaded Image: {uploadedImageName}
                            </p>
                        )}
                    </div>

                    <button className="fashionate-button" onClick={handleFashionateClick}>
                        Fashionate
                    </button>
                </div>
            </div>
        </>
    );
}

export default TryOn;
