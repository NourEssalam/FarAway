import "./index.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Your New Page Title";
  }, []);
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">list</div>;
}

function Stats() {
  return <footer className="stats">You have x </footer>;
}

export default App;
