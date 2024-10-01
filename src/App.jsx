import { useState } from "react";
import "./App.css";
import "./assets/fonts/lato-v24-latin-300.woff2";
import "./assets/fonts/lato-v24-latin-regular.woff2";
import "./assets/fonts/playfair-display-v37-latin-regular.woff2";
import "./assets/fonts/playfair-display-v37-latin-500.woff2";
import "./assets/fonts/playfair-display-v37-latin-600.woff2";
import "./assets/fonts/playfair-display-v37-latin-700.woff2";
import "./assets/fonts/playfair-display-v37-latin-800.woff2";
import "./assets/fonts/playfair-display-v37-latin-900.woff2";
import PersonalForm from "./components/PersonalForm";
import ContactForm from "./components/ContactForm";
import SkillsForm from "./components/SkillsForm";
import WorkExpForm from "./components/WorkExpForm";
import EducationForm from "./components/EducationForm";
import CVPreview from "./components/CVPreview";
import Button from "./components/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  // States PersonalForm
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [summary, setSummary] = useState("");

  // States ContactForm
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  // States SkillsForm
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // States WorkExpForm
  const [workExperiences, setWorkExperiences] = useState([]);
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newStartDateWork, setNewStartDateWork] = useState("");
  const [newEndDateWork, setNewEndDateWork] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // States EducationForm
  const [educations, setEducations] = useState([]);
  const [newSchool, setNewSchool] = useState("");
  const [newDegree, setNewDegree] = useState("");
  const [newStartDateEdu, setNewStartDateEdu] = useState("");
  const [newEndDateEdu, setNewEndDateEdu] = useState("");

  // Handler
  function handleToggleActiveClass(e) {
    e.target.classList.toggle("active");
    e.target
      .closest(".input-form")
      .querySelector(".input-info")
      .classList.toggle("active");
  }

  // Handler functions EducationForm
  function handleSubmitEducation(e) {
    e.preventDefault();

    setEducations((e) => [
      ...e,
      {
        school: newSchool,
        degree: newDegree,
        startDate: newStartDateEdu,
        endDate: newEndDateEdu,
      },
    ]);

    setNewSchool("");
    setNewDegree("");
    setNewStartDateEdu("");
    setNewEndDateEdu("");
  }
  function handleDeleteEducationButtonClick(e, index) {
    e.preventDefault();
    handleDeleteEducation(index);
  }
  function handleDeleteEducation(index) {
    setEducations(educations.filter((_, i) => i !== index));
  }
  function handleEditEducationButtonClick(e, index) {
    e.preventDefault();
    handleEditEducation(index);
  }
  function handleEditEducation(index) {
    const educationToEdit = educations.find((_, i) => i === index);
    setNewSchool(educationToEdit.school);
    setNewDegree(educationToEdit.degree);
    setNewStartDateEdu(educationToEdit.startDate);
    setNewEndDateEdu(educationToEdit.endDate);

    handleDeleteEducation(index);
  }
  function handleSchoolChange(e) {
    setNewSchool(e.target.value);
  }
  function handleDegreeChange(e) {
    setNewDegree(e.target.value);
  }
  function handleStartDateEduChange(e) {
    setNewStartDateEdu(e.target.value);
  }
  function handleEndDateEduChange(e) {
    setNewEndDateEdu(e.target.value);
  }

  // Handler functions WorkExpForm
  function handleSubmitWorkExp(e) {
    e.preventDefault();

    setWorkExperiences((w) => [
      ...w,
      {
        role: newRole,
        company: newCompany,
        startDate: newStartDateWork,
        endDate: newEndDateWork,
        description: newDescription,
      },
    ]);

    setNewRole("");
    setNewCompany("");
    setNewStartDateWork("");
    setNewEndDateWork("");
    setNewDescription("");
  }

  function handleDeleteWorkExpButtonClick(e, index) {
    e.preventDefault();
    handleDeleteWorkExp(index);
  }
  function handleDeleteWorkExp(index) {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  }

  function handleEditWorkExpButtonClick(e, index) {
    e.preventDefault();
    handleEditWorkExp(index);
  }

  function handleEditWorkExp(index) {
    const workExpToEdit = workExperiences.find((_, i) => i === index);

    setNewRole(workExpToEdit.role);
    setNewCompany(workExpToEdit.company);
    setNewStartDateWork(workExpToEdit.startDate);
    setNewEndDateWork(workExpToEdit.endDate);
    setNewDescription(workExpToEdit.description);

    handleDeleteWorkExp(index);
  }
  function handleRoleChange(e) {
    setNewRole(e.target.value);
  }
  function handleCompanyChange(e) {
    setNewCompany(e.target.value);
  }
  function handleStartDateWorkChange(e) {
    setNewStartDateWork(e.target.value);
  }
  function handleEndDateWorkChange(e) {
    setNewEndDateWork(e.target.value);
  }
  function handleDescriptionChange(e) {
    setNewDescription(e.target.value);
  }

  // Handler functions PersonalForm
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleOccupationChange(e) {
    setOccupation(e.target.value);
  }
  function handleSummaryChange(e) {
    setSummary(e.target.value);
  }

  // Handler functions ContactForm
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlelocationChange(e) {
    setLocation(e.target.value);
  }
  function handlelinkedInChange(e) {
    setLinkedIn(e.target.value);
  }

  // Handler functions SkillsForm
  function handleAddSkill() {
    if (newSkill.trim() === "") return;

    setSkills((s) => [...s, newSkill]);
    setNewSkill("");
  }
  function handleRemoveSkill(index) {
    setSkills(skills.filter((_, i) => i !== index));
  }
  function handleSkillChange(e) {
    setNewSkill(e.target.value);
  }

  // Handler helper buttons
  function handleResetForms() {
    setFirstName("");
    setLastName("");
    setOccupation("");
    setSummary("");
    setPhoneNumber("");
    setEmail("");
    setLocation("");
    setLinkedIn("");
    setSkills([]);
    setNewSkill("");
    setWorkExperiences([]);
    setNewRole("");
    setNewCompany("");
    setNewStartDateWork("");
    setNewEndDateWork("");
    setNewDescription("");
    setEducations([]);
    setNewSchool("");
    setNewDegree("");
    setNewStartDateEdu("");
    setNewEndDateEdu("");
  }

  function handleLoadExampleCV() {
    setFirstName("Marilia");
    setLastName("Newton");
    setOccupation("Web Developer");
    setSummary(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis."
    );
    setPhoneNumber("+123654789");
    setEmail("marilia@email.com");
    setLocation("France");
    setLinkedIn("linkedin.com/marilia");
    setSkills([
      "Java Script",
      "CSS",
      "HTML",
      "Webpack",
      "NPM",
      "React",
      "Jest",
    ]);
    setWorkExperiences([
      {
        role: "Manager",
        company: "Company Inc",
        startDate: "2022-04-05",
        endDate: "2024-02-01",
        description: "",
      },
      {
        role: "Developer",
        company: "Studio ABC",
        startDate: "2022-04-05",
        endDate: "",
        description:
          "Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo.",
      },
    ]);
    setEducations([
      {
        school: "University",
        degree: "Engineering",
        startDate: "2019-03-02",
        endDate: "2023-08-09",
      },
      {
        school: "The Odin Project",
        degree: "Online bootcamp",
        startDate: "2024-03-02",
        endDate: "2025-03-02",
      },
      {
        school: "Udemy",
        degree: "Java Script Course",
        startDate: "2023-03-02",
        endDate: "2023-03-02",
      },
    ]);
  }
  function handleDownloadPDF() {
    const input = document.querySelector(".cv-preview-container");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("cv.pdf");
    });
  }

  return (
    <div className="main">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="main-container">
        <div className="forms-container">
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            occupation={occupation}
            summary={summary}
            onFirstNameChange={handleFirstNameChange}
            onLastNameChange={handleLastNameChange}
            onOccupationChange={handleOccupationChange}
            onSummaryChange={handleSummaryChange}
            onSeeMoreButtonClick={handleToggleActiveClass}
          />

          <ContactForm
            phoneNumber={phoneNumber}
            email={email}
            location={location}
            linkedIn={linkedIn}
            onPhoneNumberChange={handlePhoneNumberChange}
            onEmailChange={handleEmailChange}
            onlocationChange={handlelocationChange}
            onlinkedInChange={handlelinkedInChange}
            onSeeMoreButtonClick={handleToggleActiveClass}
          />

          <SkillsForm
            onAddSkill={handleAddSkill}
            onRemoveSkill={handleRemoveSkill}
            onSkillChange={handleSkillChange}
            skills={skills}
            newSkill={newSkill}
            onSeeMoreButtonClick={handleToggleActiveClass}
          />

          <WorkExpForm
            onSubmitForm={handleSubmitWorkExp}
            onDeleteWorkExp={handleDeleteWorkExpButtonClick}
            onEditWorkExp={handleEditWorkExpButtonClick}
            onRoleChange={handleRoleChange}
            onCompanyChange={handleCompanyChange}
            onStartDateChange={handleStartDateWorkChange}
            onEndDateChange={handleEndDateWorkChange}
            onDescriptionChange={handleDescriptionChange}
            workExperiences={workExperiences}
            newRole={newRole}
            newCompany={newCompany}
            newStartDate={newStartDateWork}
            newEndDate={newEndDateWork}
            newDescription={newDescription}
            onSeeMoreButtonClick={handleToggleActiveClass}
          />

          <EducationForm
            onSubmitForm={handleSubmitEducation}
            onDeleteEducation={handleDeleteEducationButtonClick}
            onEditEducation={handleEditEducationButtonClick}
            onSchoolChange={handleSchoolChange}
            onDegreeChange={handleDegreeChange}
            onStartDateChange={handleStartDateEduChange}
            onEndDateChange={handleEndDateEduChange}
            educations={educations}
            newDegree={newDegree}
            newSchool={newSchool}
            newStartDate={newStartDateEdu}
            newEndDate={newEndDateEdu}
            onSeeMoreButtonClick={handleToggleActiveClass}
          />

          <div className="button-container">
            <Button
              onClickButton={handleLoadExampleCV}
              buttonText={"Load Example"}
            />
            <Button onClickButton={handleResetForms} buttonText={"Reset"} />
            <Button onClickButton={handleDownloadPDF} buttonText={"Print"} />
          </div>
        </div>

        <div className="cv-preview-container">
          <CVPreview
            firstName={firstName}
            lastName={lastName}
            occupation={occupation}
            summary={summary}
            phoneNumber={phoneNumber}
            email={email}
            location={location}
            linkedIn={linkedIn}
            skills={skills}
            workExperiences={workExperiences}
            educations={educations}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
