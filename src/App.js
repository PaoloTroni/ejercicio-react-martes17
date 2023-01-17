import logo from "./logo.svg";
import "./App.css";
import houses from "./houses.json";
import { ListHouse } from "./ListHouse";

function App() {
  return <ListHouse houses={houses} />;
}

export default App;
