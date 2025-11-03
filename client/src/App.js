import React, { useState, useEffect } from 'react';

function App() {
  const [bugs, setBugs] = useState([]); // function setBugs(newValue) { bugs = newValue } where bugs = []
  // useState used to store user updated data into the backend

  useEffect(() => {
    fetch("http://localhost:5000/api/bugs") // making GET request to backend
      .then(res => res.json()) // parses the http response into the javascript object, fetch
      .then(data => setBugs(data)); // runs and updates the react component state bugs
  }, []); // fetches stored data from the backend before displaying it

  return (
    <div style = {{ textAlign: "center" }}>
      <h1>Bug Tracker</h1>
      {bugs.length > 0 ? (
        bugs.map((bug, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <p><b>Priority:</b> {bug.priority} </p>
            <p><b>Status:</b> {bug.status} </p>
          </div>
        ))
      ) : (<p>No bugs yet!</p>)}
    </div>
  );
}

export default App; // allows App to be used elsewhere