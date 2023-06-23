import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Main from "./Main" 
import "./styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
