import "./App.css";
import responses from "./models/responses";
import { useState, useEffect } from "react";
import Display from "./components/Display";

function App() {
  const [response, setResponse] = useState("8");
  const [selection, setSelection] = useState(0);
  const [displayed, setDisplayed] = useState(false);
  // const [response, setResponse] = useState[responseList[selection]];

  useEffect(() => {
    // console.log("Changing response");
    if (displayed) {
      setResponse(responses[selection]);
    } else {
      setResponse("8");
    }
  }, [selection]);

  const selectQuote = () => {
    const random = Math.floor(Math.random() * (responses.length - 0) + 0);
    console.log(random);
    setSelection(random);
    setDisplayed(true);
  };

  return (
    <div className="App">
      <h1>Magic eight ball</h1>
      <Display item={response} />
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
