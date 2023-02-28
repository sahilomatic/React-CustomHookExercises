import { useRef, useEffect, useState } from "react";
export default function useHover() {
  const hoverRef = useRef(null);
  const [isHover, setHover] = useState(false);
  useEffect(() => {
    if (!hoverRef.current) {
      return;
    }

    const setYes = () => setHover(true);
    const setNo = () => setHover(false);
    hoverRef.current.addEventListener("mouseenter", setYes);
    hoverRef.current.addEventListener("mouseleave", setNo);
    console.log("here");
    return () => {
      hoverRef.current.removeEventListener("mouseenter", setYes);
      hoverRef.current.removeEventListener("mouseleave", setNo);
    };
  }, [hoverRef.current]);
  return [hoverRef, isHover];
}
