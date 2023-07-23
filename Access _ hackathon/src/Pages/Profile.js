import React from 'react';
import ProfilePicture from './ProfilePicture';
import Petitions from './Petitions';
import ContactInformation from './ContactInformation';

const ProfilePage = () => {
  return (
    <div>
      <ProfilePicture />
      <img src="path/to/client-picture.jpg" alt="Client's Picture" />
      <ul>
        <li><Petitions /></li>
        <li><ChangePassword /></li>
        <li><HousingComplex /></li>
        <li><ContactInformation /></li>
      </ul>
    </div>
  );
};

export default ProfilePage;