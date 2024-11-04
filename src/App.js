export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <Packinglist />
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
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="Form">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h4>What do you need for your 🥰 trip</h4>
        <select name="number" id="number">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Item ..." />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
function Packinglist() {
  const initItems = [
    {
      id: 1,
      description: " Passport",
      quantity: 1,
      packed: false,
    },
    {
      id: 2,
      description: " Socks",
      quantity: 20,
      packed: true,
    },
    {
      id: 3,
      description: " Charger",
      quantity: 2,
      packed: false,
    },
  ];
  return (
    <div className="Packinglist">
      <ul>
        {initItems.map((item) => (
          <li key={item.id}>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity}
              {item.description}
            </span>
            <button>❌</button>
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
