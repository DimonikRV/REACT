import React from 'react';

function Greeting(props) {
  const difer = new Date() - new Date(props.birthDate);
  const yearsOld = Math.trunc(difer / 31536000000);

  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I am ${yearsOld} years old`}
    </div>
  );
}

export default Greeting;
