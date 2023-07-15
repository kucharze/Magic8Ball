import "./App.css";
import responses from "./models/responses";
import { useState, useEffect } from "react";
import Display from "./components/Display";

function App() {
  const [responseList, setResponseList] = useState(responses);
  const [selection, setSelection] = useState(0);

  useEffect(() => {}, [selection]);

  const selectQuote = () => {
    const random = 0;
  };

  return (
    <div className="App">
      <h1>Magic eight ball</h1>
      <Display item={responseList[0]} />
      <button className="ask">Ask a question</button>
    </div>
  );
}

export default App;
