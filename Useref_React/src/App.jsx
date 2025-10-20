import React, { useRef, useState, useEffect } from "react";

const RefDisplayExample = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  // Sync ref with input state (so ref updates too)
  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>useRef Display Example</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>State Value: {input}</p>
      <p>Ref Value: {inputRef.current}</p>
      <button onClick={() => alert(inputRef.current)}>Show Ref Value</button>
    </div>
  );
};

export default RefDisplayExample;
