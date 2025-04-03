import { useState } from "react";

const EducationExperience = ({setEducation}) => {
 const[editing,setEditing]=useState(true);
 const[info,setInfo]=useState({
  college:"",
  degree:"",
  date:"",
 });

 const handleChanges=(e)=>{
 setInfo({...info,[e.target.name]:e.target.value});
 };

 const handleSubmit=(e)=>{
  e.preventDefault();
  setEditing(false);
  setEducation(info);
 };

 const handleEdit=(e)=>{
  setEditing(true);
 }

  return (
    <div className="card p-3 mb-3">
      <h2>Education Experience</h2>
      {editing? (
        <form >
          <div className="mb-2">
          <input type="text" name="college" value={info.college} onChange={handleChanges} placeholder="College Name" required />
          </div>
          <div className="mb-2">
          <input type="text" name="degree" value={info.degree} onChange={handleChanges} placeholder="Degree" required />
          </div>
          <div className="mb-2">
          <input type="text" name="date" value={info.date} onChange={handleChanges} placeholder="Year of Study" required />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
          ):(
            <div>
          <p><strong>College:</strong>{info.college}</p>
          <p><strong>Degree:</strong>{info.degree}</p>
          <p><strong>Year:</strong>{info.date}</p>
          <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
        </div>
          )
        }
    </div>
  );
};

export default EducationExperience;
