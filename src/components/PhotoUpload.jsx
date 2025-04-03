import { useState } from "react";

const PhotoUpload = ({ onPhotoUpload }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        onPhotoUpload(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card p-3 text-center">
      <h5>Upload Your Photo</h5>
      <input type="file" className="form-control mt-2" accept="image/*" onChange={handlePhotoChange} />
      {photo && <img src={photo} alt="Profile" className="img-thumbnail mt-3" width="120" />}
    </div>
  );
};

export default PhotoUpload;
