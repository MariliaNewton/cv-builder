function WorkExpForm({
  onSubmitForm,
  onDeleteWorkExp,
  onEditWorkExp,
  onRoleChange,
  onCompanyChange,
  onStartDateChange,
  onEndDateChange,
  onDescriptionChange,
  onSeeMoreButtonClick,
  workExperiences,
  newRole,
  newCompany,
  newStartDate,
  newEndDate,
  newDescription,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Work experience</h1>
        <button className="see-more" onClick={onSeeMoreButtonClick}>
          +
        </button>
      </div>

      <form className="input-info" onSubmit={onSubmitForm}>
        <label htmlFor="position">Position/Role:</label>
        <input
          type="text"
          id="position"
          value={newRole}
          onChange={onRoleChange}
          required
        />

        <label htmlFor="company">Company/Organization:</label>
        <input
          type="text"
          id="company"
          value={newCompany}
          onChange={onCompanyChange}
          required
        />

        <label htmlFor="start-date">Start date:</label>
        <input
          type="date"
          id="start-date"
          value={newStartDate}
          onChange={onStartDateChange}
          required
        />

        <label htmlFor="end-date">
          End date: <span>(optional)</span>
        </label>
        <input
          type="date"
          id="end-date"
          value={newEndDate}
          onChange={onEndDateChange}
        />

        <label htmlFor="description">
          Description: <span>(optional)</span>
        </label>
        <textarea
          id="description"
          value={newDescription}
          onChange={onDescriptionChange}
        />

        <button type="submit">SUBMIT</button>
      </form>

      {workExperiences.map((workExp, index) => (
        <div key={index} className="work-exp-item">
          <p>
            {workExp.role} - {workExp.company}
          </p>
          <button onClick={() => onEditWorkExp(index)}>edit</button>
          <button onClick={() => onDeleteWorkExp(index)}>del</button>
        </div>
      ))}
    </div>
  );
}

export default WorkExpForm;
