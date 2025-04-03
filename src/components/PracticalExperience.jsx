import { useState } from "react";


const PracticalExperience = ({setExperience}) => {
  const[editing,setEditing]=useState(true);
  const[info,setInfo]=useState({
    company:"",
    position:"",
    responsibilities:"",
    from:"",
    until:"",
  });

  const handleChanges=(e)=>{
  setInfo({...info,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setEditing(false);
    setExperience(info);
  };

  const handleEdit=(e)=>{
setEditing(true);
  }
  return (
    <div className="card p-3 mb-3">
      <h2>Practical Experience</h2>
{editing?(
        <form>
          <div className="mb-2">
          <input type="text" name="company" value={info.company} onChange={handleChanges} placeholder="Company Name" required />
          </div>
          <div className="mb-2">
          <input type="text" name="position" value={info.position}  onChange={handleChanges} placeholder="Position" required />
          </div>
          <div className="mb-2">
          <textarea name="responsibilities" value={info.responsibilities}  onChange={handleChanges} placeholder="Responsibilities" required />
          </div>
          <div className="mb-2">
          <input type="text" name="from" value={info.from}  onChange={handleChanges} placeholder="From (Year)" required />
          </div>
          <div className="mb-2">
          <input type="text" name="until" value={info.until}  onChange={handleChanges} placeholder="Until (Year)" required />
          </div>
          <button type="submit"  className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
):(
  <div>
  <p><strong>Company:</strong>{info.company}</p>
  <p><strong>Position:</strong>{info.position}</p>
  <p><strong>Responsibility:</strong>{info.responsibilities}</p>
  <p><strong>From:</strong>{info.from}</p>
  <p><strong>Until:</strong>{info.until}</p>
  <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
</div>
)}
     </div> 
  );
};

export default PracticalExperience;
