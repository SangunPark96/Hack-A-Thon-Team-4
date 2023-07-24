import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "Jessica",
    lastName: "Camilo",
    email: "jessica@gmail.com",
    petitions: [
      {
        id: 1,
        title: "Elevator Repair Request in building 4",
        status: "Pending",
      },
      {
        id: 2,
        title: "Noise Complaint in building 4",
        status: "Resolved",
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome, {userData.firstName}!</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {editMode ? (
            <div>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary me-2" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Personal Information</h5>
                  <p>
                    <strong>Name:</strong> {userData.firstName}{" "}
                    {userData.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.email}
                  </p>
                  <button className="btn btn-primary" onClick={handleEdit}>
                    Edit Profile
                  </button>
                </div>
              </div>
              <h3 className="mt-4">Your Petitions</h3>
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
      </div>
    </div>
  );
};

export default Profile;
