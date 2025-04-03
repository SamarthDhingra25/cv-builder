import { useState } from "react";

const GeneralInfo = ({setGeneralInfo}) => {
const[editing,setEditing]=useState(true);
const[info ,setInfo]=useState({
name:"",
email:"",
phone:"",
});

const handleChanges=(e)=>{
  setInfo({...info,[e.target.name]:e.target.value})
};
const handleSubmit=(e)=>{
  e.preventDefault();
  setEditing(false);
  setGeneralInfo(info);
};

const handleEdit=(e)=>{
  setEditing(true);
};

  return (
    
    <div className="card p-3 mb-3">
      <h2>General Information</h2>
      {editing?(
        <form >
          <div className="mb-2">
          <input type="text" name="name" value={info.name} onChange={handleChanges} placeholder="Name" required />
          </div>
          <div className="mb-2">
          <input type="email" name="email" value={info.email} onChange={handleChanges} placeholder="Email" required />
          </div>
          <div className="mb-2">
          <input type="tel" name="phone" value={info.phone} onChange={handleChanges}  placeholder="Phone" required />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
      ):(
        <div>
          <p><strong>Name:</strong>{info.name}</p>
          <p><strong>E-mail:</strong>{info.email}</p>
          <p><strong>Phone No.</strong>{info.phone}</p>
          <button className="btn btn-secondary"  onClick={handleEdit}>Edit</button>
        </div>
      )}
      </div>
  );
};

export default GeneralInfo;
