import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Packinglist items={items} />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <div className="Logo">
      <h1>🌴 Far Away 💼</h1>
    </div>
  );
}
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, package: false, id: Date.now() };

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div className="Form">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h4>What do you need for your 🥰 trip</h4>
        <select
          name="number"
          id="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
function Packinglist({ items }) {
  return (
    <div className="Packinglist">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => (item.package = !item.package)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <div className="Stats">
      <footer>
        <em>💼 You have X items on your list, and you already packed X (X%)</em>
      </footer>
    </div>
  );
}
