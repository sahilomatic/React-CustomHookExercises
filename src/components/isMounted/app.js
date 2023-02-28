import useIsMounted from "./useIsMounted";
import { useEffect, useState } from "react";
export default function App() {
  const Ref = useIsMounted();
  const [isMounted, setIsMounted] = useState();
  useEffect(() => {
    setIsMounted(Ref);
  }, [Ref]);
  return (
    <div>
      <div>Is component mounted {isMounted}</div>
    </div>
  );
}
