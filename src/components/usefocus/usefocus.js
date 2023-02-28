import { useRef, useEffect, useState } from "react";

export default function useFocus() {
  const [isFocus, setFocus] = useState(false);
  const customRef = useRef();
  useEffect(() => {
    let elem = customRef.current;
    if (!elem) {
      return;
    }

    let onFocus = () => {
      setFocus(true);
    };
    let onBlur = () => {
      setFocus(false);
    };
    elem.addEventListener("focus", onFocus);
    elem.addEventListener("blur", onBlur);

    return () => {
      elem.removeEventListener("focus", onFocus);
      elem.removeEventListener("blur", onBlur);
    };
  });

  return { customRef, isFocus };
}
