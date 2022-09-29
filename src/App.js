import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/CartBlog/Cart";
import Navbar from "./components/CartBlog/header/Navbar";
import Question from "./components/CartBlog/quastion/Question";


function App() {
  return (
    <div className="App bg-slate-300">
      <Navbar></Navbar>
      <Cart></Cart>
    <Question></Question>
    </div>
  );
}

export default App;
