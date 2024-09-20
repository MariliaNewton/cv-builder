function PersonalForm({
  onFirstNameChange,
  onLastNameChange,
  onOccupationChange,
  onSummaryChange,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Personal Info</h1>
        <button className="see-more">+</button>
      </div>

      <div className="input-info">
        <label htmlFor="first-name">First name:</label>
        <input type="text" id="first-name" onChange={onFirstNameChange} />

        <label htmlFor="last-name">Last name:</label>
        <input type="text" id="last-name" onChange={onLastNameChange} />

        <label htmlFor="occupation">Occupation:</label>
        <input type="text" id="occupation" onChange={onOccupationChange} />

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
