import React from "react";
import "./App.css";
import BasicExample from "./Navbar"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
      {/* React-Bootstrap Navbar */}
      <BasicExample />

      {/* Main Content */}
      <div className="main-content" style={{ padding: "20px" }}>
        <h1>Sample Project</h1>
        {/* A sample button for Sentry testing */}
        <button
          onClick={() => {
            throw new Error("This is your first error!");
          }}
          className="btn btn-danger"
        >
          Click for Error
        </button>
      </div>
    </div>
  );
}

export default App;
