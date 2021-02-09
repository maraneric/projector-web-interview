import React from "react";
import "./App.css";
import IssueViewer from "./components/IssueViewer";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Github Issue Viewer</h1>
      </header>
      <IssueViewer />
    </div>
  );
}

export default App;
