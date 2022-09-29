import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/CartBlog/Cart";
import Navbar from "./components/CartBlog/header/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart></Cart>
    </div>
  );
}

export default App;
