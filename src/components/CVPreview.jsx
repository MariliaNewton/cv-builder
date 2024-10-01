import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiCircleSmall } from "@mdi/js";

function CVPreview({
  firstName,
  lastName,
  occupation,
  summary,
  phoneNumber,
  email,
  location,
  linkedIn,
  skills,
  workExperiences,
  educations,
}) {
  function returnYear(date) {
    return date ? new Date(date).getFullYear() : "present";
  }

  return (
    <div>
      <div className="cv-header">
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{occupation}</h2>
      </div>
      <div className="cv-main">
        <div className="cv-left">
          <div className="cv-contact">
            <h2>CONTACT</h2>
            {phoneNumber && (
              <div>
                <Icon path={mdiPhone} />
                <p>{phoneNumber}</p>
              </div>
            )}
            {email && (
              <div>
                <Icon path={mdiEmail} />
                <p>{email}</p>
              </div>
            )}
            {location && (
              <div>
                <Icon path={mdiHome} />
                <p>{location}</p>
              </div>
            )}
            {linkedIn && (
              <div>
                <Icon path={mdiLinkedin} />
                <p>{linkedIn}</p>
              </div>
            )}
          </div>

          <div className="cv-skills">
            <h2>SKILLS</h2>
            {skills.map((skill, index) => (
              <div key={index}>
                <Icon path={mdiCircleSmall} />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cv-right">
          <div className="cv-summary">
            <h2>SUMMARY</h2>
            <p>{summary}</p>
          </div>

          <div className="cv-work-exp">
            <h2>WORK EXPERIENCE</h2>
            {workExperiences.map((workExp, index) => (
              <div key={index}>
                <h3>{workExp.role}</h3>
                <p>
                  {workExp.company} / {returnYear(workExp.startDate)} -{" "}
                  {returnYear(workExp.endDate)}
                </p>
                <p>{workExp.description}</p>
              </div>
            ))}
          </div>

          <div className="cv-education">
            <h2>EDUCATION</h2>
            {educations.map((edu, index) => (
              <div key={index}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <p>
                  {returnYear(edu.startDate)} - {returnYear(edu.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
