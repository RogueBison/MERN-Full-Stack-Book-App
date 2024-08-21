import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BooksContextProvider } from "./context/BooksContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
