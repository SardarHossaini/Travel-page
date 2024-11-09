import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Packinglist
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
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
    const newItem = { description, quantity, packed: false, id: Date.now() };

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
function Packinglist({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="Packinglist">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              name="check"
              id="check"
              value={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="Stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const itemNum = items.length;
  const packedNumb = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNumb / itemNum) * 100);
  return (
    <div className="Stats">
      <footer>
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `💼 You have ${itemNum} items on your list and you already packed ${packedNumb} (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
}
