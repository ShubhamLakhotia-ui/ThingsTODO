import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot

import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from '../src/components/context/UserContext';

// Use createRoot to manage the root
const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




