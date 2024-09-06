import React from 'react';

const Toast = ({ type, message }) => {
  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  return (
    <div className={`${bgColors[type]} rounded-lg p-4 shadow-lg text-white`}>
      <strong>{type.charAt(0).toUpperCase() + type.slice(1)}</strong>: {message}
      <button className="absolute top-1 right-1 text-2xl">&times;</button>
    </div>
  );
}

export default Toast;
