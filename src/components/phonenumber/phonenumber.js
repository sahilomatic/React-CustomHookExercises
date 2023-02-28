import { useState } from "react";
export default function Phonenumber() {
  const [number, setNumber] = useState("");
  const handlePhoneNumber = (e) => {
    let val = e.target.value.replace(/\D/g, "");

    if (val > 10) {
      val = val.slice(0, 10);
    }

    if (val.length > 6) {
      val = `${val.slice(0, 6)}-${val.slice(6, val.length)}`;
    }
    if (val.length > 3) {
      val = `(${val.slice(0, 3)})${val.slice(3, val.length)}`;
    }

    setNumber(val);
  };

  return (
    <div>
      <form>
        <label>Enter Phonenumber</label>
        <input onChange={(e) => handlePhoneNumber(e)} value={number} />
      </form>
    </div>
  );
}
