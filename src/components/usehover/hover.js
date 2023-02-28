import useHover from "./usehover";

export default function Hover() {
  const [hoverRef, isHovering] = useHover();

  return (
    <div ref={hoverRef}>
      Hover Component is {JSON.stringify(isHovering)}
      <br />
      <div>https://bigfrontend.dev/react/useHover</div>
    </div>
  );
}
