import { useEffect, useRef } from "react";
export default function useFirstRender(value) {
  let firstRef = useRef(null);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current.value = value;
    }
  }, [value]);

  return firstRef;
}
