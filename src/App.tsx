import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* a sample button for checking the sentry testing. when it clicked it will throw error */}

      <h1>Sample Project</h1>
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
       Click for Error
      </button>
    </div>
  );
}

export default App;
