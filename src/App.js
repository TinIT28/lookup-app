import "./App.scss";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ backgroundColor: "#F3F3F3" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
