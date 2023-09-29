import React from "react";
import ReactDOM from "react-dom";
import App from "@/components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-chatbot-kit/build/main.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
