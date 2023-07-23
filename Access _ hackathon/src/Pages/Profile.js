import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import "../Styles/style.css"

const Profile = () => {
  // Sample user data (can be fetched from the backend after login)
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    petitions: [
      {
        id: 1,
        title: 'Repair request for Unit 123',
        status: 'Pending',
      },
      {
        id: 2,
        title: 'Noise Complaint',
        status: 'Resolved',
      },
    ],
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    // Reset form data to original user data
    setFormData({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });
  };

  const handleSave = () => {
    // Save the updated user data (can be sent to the backend for processing)
    setUserData({
      ...userData,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    });
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Welcome, {userData.firstName}!</h2>
      {editMode ? (
        <div>
          <Form.Group controlId="firstName profile-form-group ">
            <Form.Label profile-form-label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              profile-form-control/>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" className="custom-button" onClick={handleSave}>
            Save
          </Button>

          <Button variant="secondary" className="custom-button secondary" onClick={handleCancelEdit}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>Personal Information</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {userData.firstName} {userData.lastName}
                <br />
                <strong>Email:</strong> {userData.email}
              </Card.Text>
              <Button variant="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
          <h3>Your Petitions</h3>
          {userData.petitions.map((petition) => (
            <div key={petition.id}>
              <Link to={`/petitions/${petition.id}`}>
                <strong>{petition.title}</strong>
              </Link>
              <p>Status: {petition.status}</p>
            </div>
          ))}
        </div>
        
      )}
      </div>
  )}

export default Profile