import React from "react";
import Nav from "./components/nav";
import Namecard from "./components/namecard";
import "./resources/App.css";

function App() {
  return (
    <div className="App">
      <Namecard />
      <Nav />
    </div>
  );
}

export default App;
