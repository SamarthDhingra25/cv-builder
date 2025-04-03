import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import CVPreview from "./components/CVPreview";
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoUpload from "./components/PhotoUpload";
import Skills from "./components/Skills";


const App = () => {
    const [photo, setPhoto] = useState(null); 

    const[skill,setSkill]=useState({
      softskills:"",
      technicalskills:"",
     });
    

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    college: "",
    degree: "",
    year: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Resume Builder</h1>
      <div className="row">
      <div className="col-md-6">
      <PhotoUpload onPhotoUpload ={setPhoto}/>
      <GeneralInfo setGeneralInfo={setGeneralInfo}/>
      <EducationExperience setEducation={setEducation}/>
      <Skills  setSkill={setSkill}/>
      <PracticalExperience setExperience={setExperience} />
</div>
<div className="col-md-6">
      <CVPreview photo={photo} generalInfo={generalInfo} education={education} skill={skill} experience={experience} />
    </div>
    </div>
    </div>
  );
};

export default App;
