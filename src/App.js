import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/CartBlog/Cart";
import Footer from "./components/CartBlog/footer/Footer";
import Navbar from "./components/CartBlog/header/Navbar";
import Question from "./components/CartBlog/question/Question";


function App() {
  return (
    <div className="App bg-slate-300">
      <Navbar></Navbar>
      <Cart></Cart>
    <Question></Question>
    <Footer></Footer>
    </div>
  );
}

export default App;
