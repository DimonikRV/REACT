import React from 'react';

const UserForm = ({ userData, handleChanges }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={handleChanges}
      />
    </form>
  );
};
export default UserForm;
