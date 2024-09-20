import { useState } from "react";
import "./App.css";
import PersonalForm from "./components/PersonalForm";
import ContactForm from "./components/ContactForm";

function App() {
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

  return (
    <div className="main-container">
      <div className="forms-container">
        <PersonalForm
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleOccupationChange={handleOccupationChange}
          handleSummaryChange={handleSummaryChange}
        />

        <ContactForm
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleEmailChange={handleEmailChange}
          handlelocationChange={handlelocationChange}
          handlelinkedInChange={handlelinkedInChange}
        />
      </div>

      <div className="cv-preview-container">
        <h1>Just to fill space while coding</h1>
      </div>
    </div>
  );
}

export default App;
