import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'normalize.css';
import App from "./App";

import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
    <App msalInstance={msalInstance} />
  </React.StrictMode>,
  document.getElementById("root")
);
