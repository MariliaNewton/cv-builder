function PersonalForm({
  onFirstNameChange,
  onLastNameChange,
  onOccupationChange,
  onSummaryChange,
  onSeeMoreButtonClick,
  firstName,
  lastName,
  occupation,
  summary,
}) {
  // function toggleActiveClass(e) {
  //   e.target.classList.toggle("active");
  //   document.querySelector(".input-info").classList.toggle("active");
  // }

  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Personal Info</h1>
        <button className="see-more" onClick={onSeeMoreButtonClick}></button>
      </div>

      <div className="input-info">
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          onChange={onFirstNameChange}
          maxLength={10}
          value={firstName}
        />

        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          id="last-name"
          onChange={onLastNameChange}
          maxLength={10}
          value={lastName}
        />

        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          onChange={onOccupationChange}
          maxLength={25}
          value={occupation}
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          onChange={onSummaryChange}
          maxLength={350}
          value={summary}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
