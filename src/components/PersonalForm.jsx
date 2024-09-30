function PersonalForm({
  onFirstNameChange,
  onLastNameChange,
  onOccupationChange,
  onSummaryChange,
  onSeeMoreButtonClick,
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
          maxLength={10}
          onChange={onFirstNameChange}
        />

        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          id="last-name"
          onChange={onLastNameChange}
          maxLength={10}
        />

        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          onChange={onOccupationChange}
          maxLength={15}
        />

        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          onChange={onSummaryChange}
          placeholder="Write about yourself and your experience..."
        />
      </div>
    </div>
  );
}

export default PersonalForm;
