import useArray from "./usearray";
import { useState } from "react";

export default function Application() {
  const [nextVal, setNextVal] = useState();
  const [index, setIndex] = useState();
  let { array, push, removeByIndex } = useArray(2);

  const handlepush = () => {
    console.log(nextVal);
    push(nextVal);
    setNextVal("");
  };

  const removeByIndexHandle = () => {
    removeByIndex(index);
  };
  return (
    <div>
      Data is Arary is {JSON.stringify(array)}
      <div>
        <input
          placeholder="enter next element"
          onChange={(e) => {
            setNextVal(e.target.value);
          }}
          value={nextVal}
        />
        <button onClick={handlepush}>Push</button>
      </div>
      <div>
        <input
          placeholder="enter index to remove"
          onChange={(e) => {
            setIndex(e.target.value.replace(/\D/g, ""));
          }}
          value={index}
        />
        <button onClick={removeByIndexHandle}>Remove</button>
      </div>
    </div>
  );
}
