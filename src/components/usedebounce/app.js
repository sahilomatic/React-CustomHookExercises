import useDebouncing from "./useDebounce";
import { useState } from "react";
export default function DebounceApp() {
  const [inputVal, setInput] = useState("");
  const val = useDebouncing(inputVal, 3000);

  return (
    <div>
      <h2>Input with debounce</h2>
      <input value={inputVal} onChange={(e) => setInput(e.target.value)} />
      <div>Value after 3000 delay is {val}</div>
    </div>
  );
}
