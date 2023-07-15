import "./App.css";
import responses from "./models/responses";
import { useState, useEffect } from "react";
import Display from "./components/Display";

function App() {
  const [responseList, setResponseList] = useState(responses);
  const [selection, setSelection] = useState(0);

  return (
    <div className="App">
      <h1>Magic eight ball</h1>
      <Display item={responseList[0]} />
    </div>
  );
}

export default App;
