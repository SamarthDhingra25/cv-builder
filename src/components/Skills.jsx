import { useState } from "react";

const Skills=({setSkill})=>{
  const[editing,setEditing]=useState(true);
   const[info,setInfo]=useState({
    softskills:"",
    technicalskills:"",
   });
  
   const handleChanges=(e)=>{
   setInfo({...info,[e.target.name]:e.target.value});
   };
  
   const handleSubmit=(e)=>{
    e.preventDefault();
    setEditing(false);
    setSkill(info)
   };
  
   const handleEdit=(e)=>{
    setEditing(true);
   }
  
    return (
      <div className="card p-3 mb-3">
        <h2>Skills</h2>
        {editing? (
          <form >
            <div className="mb-2">
            <textarea type="text" name="softskills" value={info.softskills} onChange={handleChanges} placeholder="Soft skills" required />
            </div>
            <div className="mb-2">
            <textarea type="text" name="technicalskills" value={info.technicalskills} onChange={handleChanges} placeholder="Technical skills" required />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
            ):(
              <div>
            <p><strong>Soft Skills:</strong>{info.softskills}</p>
            <p><strong>Technical Skills:</strong>{info.technicalskills}</p>
            <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
          </div>
            )
          }
      </div>
    );
}
export default Skills;