import React from "react";
import ReactDOM from "react-dom";
import App from "@/components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "@/styles/index.scss";
import "react-chatbot-kit/build/main.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
