import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();