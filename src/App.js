import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import { SortedShoppingList } from "./sortedShoppingList";

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
    SortedShoppingList();
  };

  return (
    <>
      <Header />
      <div className="customer-section">
        <h1>Customer section</h1>
        <div className="shopping-list">
          <DisplayItems items={itemList} />
          <form className="form">
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
      </div>
    </>
  );
}

const Header = () => {
  return (
    <div className="header">
      <h1>Two Dots</h1>
      <button>Login for shopowners</button>
    </div>
  );
};

const DisplayItems = ({ items }) => {
  if (items.length == 0) {
    return (
      <>
        <p>type to make your shopping list</p>
      </>
    );
  }

  const shoppingList = items.map((item) => <li>{item}</li>);
  return (
    <div className="shopping-list">
      <ul>{shoppingList}</ul>
    </div>
  );
};

export default App;
