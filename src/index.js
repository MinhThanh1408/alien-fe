import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";
import GlobalStyles from "src/components/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);

reportWebVitals();
