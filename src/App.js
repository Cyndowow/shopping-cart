import { BrowserRouter } from "react-router-dom";
import Main from "./Main" 
import "./styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
