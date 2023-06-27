import { HashRouter } from "react-router-dom";
import Main from "./Main" 
import "./styles.css";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Main />
      </HashRouter>
    </>
  );
}

export default App;
