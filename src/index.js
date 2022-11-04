import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { FaqComponent } from "./Faq";

class App extends Component {
  render() {
    return (
      <div>
        This is a React component inside of Webflow!
        <FaqComponent />
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
