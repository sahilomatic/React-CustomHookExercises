import useOutsideClick from "./useOutsideClick";
import { useState } from "react";
export default function UseClick() {
  const [outSideClick, setOutSideClick] = useState(null);

  const handleClick = (val) => {
    setOutSideClick(val);
  };
  const Ref = useOutsideClick(handleClick);
  return (
    <div style={{ backgroundColor: "grey", height: "100px" }}>
      Outside Model
      <div ref={Ref} style={{ backgroundColor: "red", height: "50px" }}>
        Inside Model
        {outSideClick}
        {outSideClick != null && (
          <p>{outSideClick == "true" ? "clicked outside" : "clicked Inside"}</p>
        )}
      </div>
    </div>
  );
}
