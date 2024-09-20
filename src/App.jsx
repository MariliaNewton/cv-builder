import { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import ContactForm from "./components/ContactForm";
import SkillsForm from "./components/SkillsForm";
import WorkExpForm from "./components/WorkExpForm";

function App() {
  // States SkillsForm
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // States WorkExpForm
  const [workExperiences, setWorkExperiences] = useState([]);
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Handler functions WorkExpForm
  function handleSubmitWorkExp(e) {
    e.preventDefault();

    setWorkExperiences((w) => [
      ...w,
      {
        role: newRole,
        company: newCompany,
        startDate: newStartDate,
        endDate: newEndDate,
        description: newDescription,
      },
    ]);

    setNewRole("");
    setNewCompany("");
    setNewStartDate("");
    setNewEndDate("");
    setNewDescription("");
  }
  function handleDeleteWorkExp(index) {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  }
  function handleEditWorkExp(index) {
    const workExpToEdit = workExperiences.find((_, i) => i === index);
    setNewRole(workExpToEdit.role);
    setNewCompany(workExpToEdit.company);
    setNewStartDate(workExpToEdit.startDate);
    setNewEndDate(workExpToEdit.endDate);
    setNewDescription(workExpToEdit.description);

    handleDeleteWorkExp(index);
  }
  function handleRoleChange(e) {
    setNewRole(e.target.value);
  }
  function handleCompanyChange(e) {
    setNewCompany(e.target.value);
  }
  function handleStartDateChange(e) {
    setNewStartDate(e.target.value);
  }
  function handleEndDateChange(e) {
    setNewEndDate(e.target.value);
  }
  function handleDescriptionChange(e) {
    setNewDescription(e.target.value);
  }

  // Handler functions PersonalForm
  function handleFirstNameChange(e) {
    console.log(e.target.value);
  }
  function handleLastNameChange(e) {
    console.log(e.target.value);
  }
  function handleOccupationChange(e) {
    console.log(e.target.value);
  }
  function handleSummaryChange(e) {
    console.log(e.target.value);
  }

  // Handler functions ContactForm
  function handlePhoneNumberChange(e) {
    console.log(e.target.value);
  }
  function handleEmailChange(e) {
    console.log(e.target.value);
  }
  function handlelocationChange(e) {
    console.log(e.target.value);
  }
  function handlelinkedInChange(e) {
    console.log(e.target.value);
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
        />

        <ContactForm
          onPhoneNumberChange={handlePhoneNumberChange}
          onEmailChange={handleEmailChange}
          onlocationChange={handlelocationChange}
          onlinkedInChange={handlelinkedInChange}
        />

        <SkillsForm
          onAddSkill={handleAddSkill}
          onRemoveSkill={handleRemoveSkill}
          onSkillChange={handleSkillChange}
          skills={skills}
          newSkill={newSkill}
        />

        <WorkExpForm
          onSubmitForm={handleSubmitWorkExp}
          onDeleteWorkExp={handleDeleteWorkExp}
          onEditWorkExp={handleEditWorkExp}
          onRoleChange={handleRoleChange}
          onCompanyChange={handleCompanyChange}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onDescriptionChange={handleDescriptionChange}
          workExperiences={workExperiences}
          newRole={newRole}
          newCompany={newCompany}
          newStartDate={newStartDate}
          newEndDate={newEndDate}
          newDescription={newDescription}
        />
      </div>

      <div className="cv-preview-container">
        <h1>Just to fill space while coding</h1>
      </div>
    </div>
  );
}

export default App;
