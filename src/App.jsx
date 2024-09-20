import { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import ContactForm from "./components/ContactForm";
import SkillsForm from "./components/SkillsForm";

function App() {
  // State SkillsForm
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState(["css", "html"]);

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
          newSkill={newSkill}
          skills={skills}
        />
      </div>

      <div className="cv-preview-container">
        <h1>Just to fill space while coding</h1>
      </div>
    </div>
  );
}

export default App;
