import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const CVPreview = ({photo, generalInfo, education,skill, experience }) => {
  const handleDownload = () => {
    const cvElement = document.getElementById("cv-preview"); 
    html2canvas(cvElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      let yOffset = 10;
     
      if (photo) {
        pdf.addImage(photo, "JPEG", 10, yOffset, 40, 40); 
        yOffset += 50;
      }
      const imgWidth = 190; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("My_CV.pdf");
    });
  };

  return (
    <div className="card p-3">
      <div id="cv-preview">
      <h3 className="text-center">Resume Preview</h3>
      <hr />

      {photo && <img src={photo} alt="Profile" className="img-thumbnail mb-3" width="120" />}

      <h4>General Info:</h4>
      <p><strong>Name:</strong>{generalInfo.name}</p>
      <p><strong>Email:</strong>{generalInfo.email}</p>
      <p><strong>Phone No.:</strong>{generalInfo.phone}</p>

      <h4>Education:</h4>
      <p><strong>College Name:</strong>{education.college} </p>
     <p><strong>Degree:</strong> {education.degree} </p>
     <p><strong>Year Passout:</strong> {education.date}</p>

     <h4>Skills:</h4>
      <p><strong>Soft Skills:</strong>{skill.softskills} </p>
      <p><strong>Technical Skills:</strong>{skill.technicalskills} </p>

      <h4>Experience:</h4>
      <p><strong>Company:</strong>{experience.company}</p>
      <p><strong>Position:</strong> {experience.position}</p>
      <p><strong>From:</strong>{experience.from} <strong>To:</strong>{experience.until}</p>
      <p><strong>Responsibility:</strong>{experience.responsibilities}</p>
    </div>
    <button className="btn btn-success mt-3" onClick={handleDownload}>
        Download CV
      </button>
      </div>
  );
};

export default CVPreview;
