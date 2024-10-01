function ContactForm({
  phoneNumber,
  email,
  location,
  linkedIn,
  onPhoneNumberChange,
  onEmailChange,
  onlocationChange,
  onlinkedInChange,
  onSeeMoreButtonClick,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Contact</h1>
        <button className="see-more" onClick={onSeeMoreButtonClick}></button>
      </div>

      <div className="input-info">
        <label htmlFor="phone-number">Phone number:</label>
        <input
          type="tel"
          id="phone-number"
          onChange={onPhoneNumberChange}
          maxLength={15}
          value={phoneNumber}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={onEmailChange}
          maxLength={35}
          value={email}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          onChange={onlocationChange}
          maxLength={18}
          value={location}
        />

        <label htmlFor="linked-in">linkedIn link:</label>
        <input
          type="url"
          id="linked-in"
          onChange={onlinkedInChange}
          maxLength={18}
          value={linkedIn}
        />
      </div>
    </div>
  );
}

export default ContactForm;
