import "./App.css";

const name = "Oriana";

function greet(name: string) {
  return `Hi ${name}!`;
}

function App() {
  return <button onClick={() => alert(greet(name))}>Say hi</button>;
}

export default App;
