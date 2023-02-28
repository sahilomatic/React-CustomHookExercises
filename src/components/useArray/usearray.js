import { useState, useCallback } from "react";
export default function useArray(initialValue = []) {
  const [array, setArray] = useState([initialValue]);

  const push = useCallback((item) => {
    setArray([...array, item]);
  });

  const removeByIndex = useCallback((index) => {
    index = parseInt(index);
    let res = array.filter((obj, id) => {
      if (id != index) {
        return obj;
      }
    });

    setArray(res);
  });

  return { array, push, removeByIndex };
}
