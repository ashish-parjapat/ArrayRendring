import items from "./array.jsx";

function RenderArray() {
  return (
    <div>
      <h1>Rendering The Elements Of The Array</h1>
      <ol>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}
export default RenderArray;
