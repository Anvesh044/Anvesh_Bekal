import React, { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="container">
      <h2>Upload Cake Image</h2>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded"  />}
    </div>
  );
}

export default ImageUploader;
