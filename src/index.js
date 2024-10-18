import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      image={
        "https://t3.ftcdn.net/jpg/03/83/43/00/360_F_383430016_lzX8FHsxfKaV6nKW22TQ08idxuBXKU3v.jpg"
      }
      type={"Plant"}
      title={"POPULAR HOUSE PLANT"}
      price={"18$"}
    />
  </React.StrictMode>
);

;
