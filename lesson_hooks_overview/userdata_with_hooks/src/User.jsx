import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      if (!response.ok) {
        throw new Error();
      }
      const userData = await response.json();

      setUserData(userData);
    })();
  }, [userId]);

  if (!userData) {
    return null;
  }
  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
