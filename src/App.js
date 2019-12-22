import React from "react";
import { useState } from "react";
import "./App.css";
import { SimpleImg } from "react-simple-img";

const testDomains = [
  "twitter.com",
  "google.com",
  "stackoverflow.com",
  "linkedin.com",
  "airbnb.com",
  "medium.com"
];

const mkRow = (domain, key) => {
  return (
    <div key={key} className="row">
      <SimpleImg
        width="32px"
        height="32px"
        src={"https://api.faviconkit.com/" + domain + "/32"}
        importance="low"
      />
      <span>{domain}</span>
    </div>
  );
};

function App() {
  let [data, setData] = useState(testDomains);

  console.log("App: ", { data });
  const rows = data.map((domain, idx) => mkRow(domain, idx));

  const onClick = () => {
    console.log("onClick");
    let cloned = [...data];
    cloned.splice(1, 1);
    setData(cloned);
  };

  return (
    <div className="App">
      <h1>react-simple-img test app</h1>
      <div className="main-container">
        {rows}
        <button onClick={onClick}>Delete Row</button>
      </div>
    </div>
  );
}

export default App;
