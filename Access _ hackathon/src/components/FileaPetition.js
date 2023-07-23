import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Styles/style.css"

const FileaPetition = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petitionTitle: '',
    petitionText: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., sending data to the backend
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      petitionTitle: '',
      petitionText: '',
    });
    // Set the formSubmitted state to true to close the form
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return <p>Thank you for submitting the petition!</p>;
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group" controlId="formEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formPetitionTitle">
          <Form.Label className="form-label">Petition Title</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="petitionTitle"
            value={formData.petitionTitle}
            onChange={handleChange}
            placeholder="Enter the petition title"
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formPetitionText">
          <Form.Label className="form-label">Petition Text</Form.Label>
          <Form.Control
            className="form-control form-textarea"
            as="textarea"
            name="petitionText"
            value={formData.petitionText}
            onChange={handleChange}
            rows={4}
            placeholder="Enter the petition text"
          />
        </Form.Group>

        {/* Other form fields go here */}

        <Button className="form-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FileaPetition;