import "./App.css";
import responses from "./models/responses";
import { useState, useEffect } from "react";
import Display from "./components/Display";

function App() {
  const [response, setResponseList] = useState(responses[0]);
  const [selection, setSelection] = useState(0);
  // const [response, setResponse] = useState[responseList[selection]];

  useEffect(() => {
    console.log("Changing response");
  }, [selection]);

  const selectQuote = () => {
    const random = Math.floor(Math.random() * (responses.length - 0) + 0);
    console.log(random);
    setSelection(random);
  };

  return (
    <div className="App">
      <h1>Magic eight ball</h1>
      <Display item={responses[0]} />
      <button
        className="ask"
        onClick={(e) => {
          selectQuote();
        }}
      >
        Ask a question
      </button>
    </div>
  );
}

export default App;
