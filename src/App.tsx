import { Outlet } from "react-router-dom";
import Router from "./Router";

function App() {
  const router = Router();
  return <div className="App relative">{router}</div>;
}

export default App;
