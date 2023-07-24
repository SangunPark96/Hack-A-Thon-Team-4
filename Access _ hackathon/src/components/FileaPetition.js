import React, { useState } from "react";
import "../Styles/FileAPetition.css";

const FileaPetition = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    petitionTitle: "",
    petitionText: "",
    anonymous: false, // New state for the checkbox
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: fieldValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If the user selected to submit anonymously, clear name and email
    if (formData.anonymous) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: "",
        email: "",
      }));
    }

    // Perform form submission logic here, e.g., sending data to the backend
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      petitionTitle: "",
      petitionText: "",
      anonymous: false,
    });
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <p className="thank-you-message">
        Thank you for submitting the petition!
      </p>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
          />
          <label className="form-check-label">File Petition Anonymously</label>
        </div>

        {/* Render name and email fields only if not submitting anonymously */}
        {!formData.anonymous && (
          <React.Fragment>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          </React.Fragment>
        )}

        <div className="form-group">
          <label className="form-label">Petition Title</label>
          <input
            className="form-control"
            type="text"
            name="petitionTitle"
            value={formData.petitionTitle}
            onChange={handleChange}
            placeholder="Enter the petition title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Petition Text</label>
          <textarea
            className="form-control form-textarea"
            name="petitionText"
            value={formData.petitionText}
            onChange={handleChange}
            rows={4}
            placeholder="Enter the petition text"
          />
        </div>

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileaPetition;
