import "./App.scss";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
