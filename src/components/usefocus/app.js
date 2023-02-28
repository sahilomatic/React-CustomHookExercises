import useFocus from "./usefocus";
export default function App() {
  const { customRef, isFocus } = useFocus();

  return (
    <div>
      <p>on Focus for custom ref</p>
      <input ref={customRef} />
      {isFocus ? <p>Input is in Focus</p> : <p>Input is in Blur</p>}
    </div>
  );
}
