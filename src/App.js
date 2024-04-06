import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const itemInput = useRef(null);
  const [itemList, addItem] = useState([]);

  const addItemButtonAction = () => {
    const item = itemInput.current.value;
    itemInput.current.value = "";
    addItem(itemList.concat(item));
  };

  // when the confirm button is pressed
  // the list is stored into an array named finalized list
  const confirmButtonAction = () => {
    const finalizedList = itemList;
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
        <button type="button" onClick={confirmButtonAction}>
          Confirm
        </button>
      </form>
    </div>
  );
}

const DisplayItems = ({ items }) => {
  const shoppingList = items.map((item) => <li>{item}</li>);
  return (
    <>
      <ul>{shoppingList}</ul>
    </>
  );
};

export default App;
