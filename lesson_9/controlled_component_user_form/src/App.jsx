import React from 'react';
import UserForm from './UserForm';

const App = props => {
  const createUser = userData => {
    console.log(userData);
  };
  return <UserForm onSubmit={createUser} />;
};
export default App;
