import { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import ContactForm from "./components/ContactForm";
import SkillsForm from "./components/SkillsForm";
import WorkExpForm from "./components/WorkExpForm";
import EducationForm from "./components/EducationForm";
import CVPreview from "./components/CVPreview";

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
  function handleDeleteEducation(index) {
    setEducations(educations.filter((_, i) => i !== index));
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
  function handleDeleteWorkExp(index) {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
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

  return (
    <div className="main-container">
      <div className="forms-container">
        <PersonalForm
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          onOccupationChange={handleOccupationChange}
          onSummaryChange={handleSummaryChange}
          onSeeMoreButtonClick={handleToggleActiveClass}
        />

        <ContactForm
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
          onDeleteWorkExp={handleDeleteWorkExp}
          onEditWorkExp={handleEditWorkExp}
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
          onDeleteEducation={handleDeleteEducation}
          onEditEducation={handleEditEducation}
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
  );
}

export default App;
