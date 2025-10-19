import React,{useEffect , useRef , useState} from 'react'
import Counter from './Counter';
import FocusInput from './FocusInput';

const App = () => {
  const [Input , setInput] = useState("")
  const inputRef = useRef()
  console.log("Getting rendered");

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const display=()=>{
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Input</h1>
      <input type="text"
      ref={inputRef}
      value={Input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <p>my name is {Input}</p>
      <p>my name is {inputRef.current}</p>
      {/* <p>my name is {inputRef.current}</p> */}
      <button onClick={display}>Show Input</button>
      <Counter />
      <FocusInput />
    </div>
  )
}

export default App