import { useState } from "react";

function SkillsForm({
  onAddSkill,
  onRemoveSkill,
  onSkillChange,
  onSeeMoreButtonClick,
  newSkill,
  skills,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Skills</h1>
        <button className="see-more" onClick={onSeeMoreButtonClick}>
          +
        </button>
      </div>

      <div className="input-info">
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          id="skill"
          value={newSkill}
          onChange={onSkillChange}
        />
        <button onClick={onAddSkill}>+</button>

        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <p>{skill}</p>
            <button onClick={() => onRemoveSkill(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsForm;
