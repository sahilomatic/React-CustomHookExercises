import { useRef, useEffect } from "react";
export default function useIsMounted() {
  const Ref = useRef("false");
  useEffect(() => {
    if (Ref.current) {
      Ref.current = "true";
    }

    return () => {
      return (Ref.current = "false");
    };
  }, []);

  return Ref.current;
}
