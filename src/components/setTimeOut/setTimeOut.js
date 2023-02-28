import { useState } from "react";
import useFirstRender from "./useFirstRender";

export default function SetTimeOut() {
  const [number, setNumber] = useState(0);
  const [delay, setDelay] = useState(100);
  let firstRef = useFirstRender(number);

  const decreaseNumber = () => {
    let newnumb = number - 1;
    setNumber(newnumb);
  };

  const increaseNumber = () => {
    let newnumb = number + 1;
    setNumber(newnumb);
  };

  const handleButton = (choice) => {
    if (choice == 1) {
      increaseNumber();
    } else if (choice == 2) {
      decreaseNumber();
    }
  };

  return (
    <div ref={firstRef}>
      <p>
        Create a hook to easily use setTimeout(callback, delay). reset the timer
        if delay changes DO NOT reset the timer if only callback changes
      </p>

      <div>{number}</div>
      <div>
        <button
          onClick={() => {
            handleButton(1);
          }}
        >
          Increase number
        </button>
        <button
          onClick={() => {
            handleButton(2);
          }}
        >
          Decrease number
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setDelay(delay + 50);
          }}
        >
          Change Delay
        </button>
      </div>

      <div>
        {firstRef.current == null ? (
          <p>This first render</p>
        ) : (
          <p>
            This is not first render . Previous value was
            {firstRef.current.value}
          </p>
        )}
      </div>
    </div>
  );
}
