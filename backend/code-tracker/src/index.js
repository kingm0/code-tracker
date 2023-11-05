import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper.js";
// import ThemeContextWrapper from '../components/ThemeWrapper/ThemeWrapper.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeContextWrapper> */}
      {/* <BackgroundColorWrapper> */}
      <App />
      {/* </BackgroundColorWrapper> */}
    {/* </ThemeContextWrapper> */}
  </React.StrictMode>
);