function EducationalForm({
  onSubmitForm,
  onDeleteEducation,
  onEditEducation,
  onSchoolChange,
  onDegreeChange,
  onStartDateChange,
  onEndDateChange,
  onSeeMoreButtonClick,
  educations,
  newDegree,
  newSchool,
  newStartDate,
  newEndDate,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Education</h1>
        <button className="see-more" onClick={onSeeMoreButtonClick}></button>
      </div>
      <form onSubmit={onSubmitForm} className="input-info">
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          value={newSchool}
          onChange={onSchoolChange}
          required
        />

        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          value={newDegree}
          onChange={onDegreeChange}
          required
        />

        <label htmlFor="start-date">Start date:</label>
        <input
          type="date"
          id="start-date"
          value={newStartDate}
          onChange={onStartDateChange}
          min="2000-01-01"
          required
        />

        <label htmlFor="end-date">End date: (or expected)</label>
        <input
          type="date"
          id="end-date"
          value={newEndDate}
          onChange={onEndDateChange}
          required
        />

        <button type="submit" className="add-button"></button>

        <div className="edu-container">
          {educations.map((education, index) => (
            <div key={index} className="education-item">
              <p>
                {education.degree} - {education.school}
              </p>
              <button
                onClick={(e) => onEditEducation(e, index)}
                className="edit-button"
              ></button>
              <button
                onClick={(e) => onDeleteEducation(e, index)}
                className="delete-button"
              ></button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default EducationalForm;
