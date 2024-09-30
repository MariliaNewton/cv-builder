function ContactForm({
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
        <button className="see-more" onClick={onSeeMoreButtonClick}>
          +
        </button>
      </div>

      <div className="input-info">
        <label htmlFor="phone-number">Phone number:</label>
        <input type="tel" id="phone-number" onChange={onPhoneNumberChange} />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" onChange={onEmailChange} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" onChange={onlocationChange} />

        <label htmlFor="linked-in">linkedIn link:</label>
        <input type="url" id="linked-in" onChange={onlinkedInChange} />
      </div>
    </div>
  );
}

export default ContactForm;
