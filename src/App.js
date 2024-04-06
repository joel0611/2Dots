import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  console.log("starts rendering");

  const itemInput = useRef(null);
  const [itemList, addItem] = useState([]);

  console.log(itemList);

  const addItemButtonAction = () => {
    const item = itemInput.current.value;
    addItem(itemList.concat(item));
  };

  return (
    <div>
      <DisplayItems items={itemList} />
      <form>
        <label htmlFor="item-input"></label>
        <input type="text" ref={itemInput} name="item-input"></input>
        <button type="button" onClick={addItemButtonAction}>
          Add item
        </button>
        <button type="button">Confirm</button>
      </form>
    </div>
  );
}

const DisplayItems = ({ items }) => {
  return <>{items}</>;
};

export default App;
