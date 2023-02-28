import { useRef, useEffect } from "react";
export default function useOutsideClick(callback) {
  const Ref = useRef();
  useEffect(() => {
    let elem = Ref.current;
    const handleCLick = (e) => {
      console.log("click ocurred");
      if (elem && elem.contains(e.target)) {
        callback("false");
      } else {
        callback("true");
      }
    };

    elem.addEventListener("click", handleCLick);

    return () => {
      elem.removeEventListener("click", handleCLick);
    };
  });

  return Ref;
}
