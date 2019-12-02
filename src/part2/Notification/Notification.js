import React from 'react';
import './Notification.css';

const Notification = ({ isError, isShown, message }) => {
  if (!isShown) return null;

  return (
    <div className={'notification ' + (isError ? 'notification_error' : 'notification_success')}>
      {message}
    </div>
  );
};

export default Notification;
