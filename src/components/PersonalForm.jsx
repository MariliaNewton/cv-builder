function PersonalForm({
  handleFirstNameChange,
  handleLastNameChange,
  handleOccupationChange,
  handleSummaryChange,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Personal Info</h1>
        <button className="see-more">+</button>
      </div>

      <label htmlFor="first-name">First name:</label>
      <input type="text" id="first-name" onChange={handleFirstNameChange} />

      <label htmlFor="last-name">Last name:</label>
      <input type="text" id="last-name" onChange={handleLastNameChange} />

      <label htmlFor="occupation">Occupation:</label>
      <input type="text" id="occupation" onChange={handleOccupationChange} />

      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        onChange={handleSummaryChange}
        placeholder="Write about yourself and your experience..."
      />
    </div>
  );
}

export default PersonalForm;
