import React, { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  React.useEffect(() => {
    previousCount.current = count; // update the ref manually
  }, [count]);

  return (
    <div>
      <h3>Current: {count}</h3>
      <h4>Previous: {previousCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
