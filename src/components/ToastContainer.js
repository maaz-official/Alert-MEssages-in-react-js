import React from 'react';
import Toast from './Toast';

const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed bottom-0 right-0 p-4 max-w-sm w-full space-y-2 z-50">
      {toasts.map(toast => (
        <Toast key={toast.id} type={toast.type} message={toast.message} />
      ))}
    </div>
  );
}

export default ToastContainer;
