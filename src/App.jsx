import Headbar from "./Components/Headbar/Headbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Headbar /> */}
      <Outlet />
    </>
  );
}

export default App;
