import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <GoogleOAuthProvider
      clientId={
        "759333204322-dil42cjmdsp66586cbtckajeomcbrvpi.apps.googleusercontent.com"
      }
    >
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
