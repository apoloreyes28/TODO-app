// import React from 'react';
// import { useState } from "react";
// import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
// import Auto from './Auto.js';

// --------------------------------------------------------------------

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);