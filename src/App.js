import "./App.scss";
import './index.css';
import Header from "./components/Layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/Error/NotFound";
import LoginForm from "./components/User/LoginForm";
import { Fragment } from "react";
import NewFeed from "./components/Home/NewFeed";
import Search from "./components/Search/Search";
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Tours from './components/Home/Tours';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Hero />
      <About />
      <Services />
      <Tours />
          <Routes>
            <Route path="/" element={<NewFeed />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
