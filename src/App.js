import React, { useState } from 'react';
import ToastContainer from './components/ToastContainer';

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const newToast = { id: Date.now(), type, message };
    setToasts(prevToasts => [...prevToasts, newToast]);

    // Set a timeout to remove the toast after 3 seconds
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== newToast.id));
    }, 3000);
  };

  return (
    <div className="space-y-2">
      <button onClick={() => addToast('success', 'This is a success message!')}>
        Show Success Toast
      </button>
      <br />
      <button onClick={() => addToast('warning', 'This is a warning message!')}>
        Show Warning Toast
      </button>
      <br />

      <button onClick={() => addToast('error', 'This is an error message!')}>
        Show Error Toast
      </button>
      <ToastContainer toasts={toasts} />
    </div>
  );
}

export default App;
