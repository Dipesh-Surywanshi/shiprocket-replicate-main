// NotificationButton.js
import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import NotificationPopup from './NotificationPopup';

const NotificationButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      <button className="text-[16px]" onClick={togglePopup}>
        <FaBell />
      </button>
      <NotificationPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  );
};

export default NotificationButton;
