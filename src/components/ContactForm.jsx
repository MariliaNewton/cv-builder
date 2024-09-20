function ContactForm({
  handlePhoneNumberChange,
  handleEmailChange,
  handlelocationChange,
  handlelinkedInChange,
}) {
  return (
    <div className="input-form">
      <div className="input-title">
        <h1>Personal Info</h1>
        <button className="see-more">+</button>
      </div>

      <label htmlFor="phone-number">Phone number:</label>
      <input type="tel" id="phone-number" onChange={handlePhoneNumberChange} />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" onChange={handleEmailChange} />

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" onChange={handlelocationChange} />

      <label htmlFor="linked-in">linkedIn link:</label>
      <input type="url" id="linked-in" onChange={handlelinkedInChange} />
    </div>
  );
}

export default ContactForm;
