import React from 'react';
import UserForm from './UserForm';

const Profile = ({ userData, handleChanges }) => {
  return (
    <div className="column">
      <UserForm userData={userData} handleChanges={handleChanges} />
    </div>
  );
};
export default Profile;
