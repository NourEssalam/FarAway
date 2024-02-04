import "./index.css";
import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    document.title = "Your New Page Title";
  }, []);

  const [items, setItems] = useState([]);

  function handleAddItems(itemObj) {
    // We Can't use push method because it will mutate the state which is not allowed in React
    setItems((items) => [...items, itemObj]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // add the the new item onject to the items array
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>

      <select
        name="id"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, setItems }) {
  function handleDeleteItems(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDelete={handleDeleteItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDelete }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return <footer className="stats">You have x </footer>;
}

export default App;
