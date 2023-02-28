import { useEffect, useRef } from "react";

export default function useSetTimeOut(callback, delay) {
  // to mantain persistence between render useRef

  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    let id = setTimeout(() => {
      callbackRef.current();
    }, delay);

    // since setTimeout should only restart by change in delay only
    // so when delay changes prev timeout will get clear
    return () => clearTimeout(id);
  }, [delay]);
}
