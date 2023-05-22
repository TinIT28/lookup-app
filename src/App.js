import "./App.scss";
import './index.css';
import Header from "./components/Layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/Error/NotFound";
import LoginForm from "./components/User/LoginForm";
import { Fragment } from "react";
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Tours from './components/Home/Tours';
import Footer from './components/Home/Footer';
import Services from './components/Home/Services';
import Form from './components/Forms/Form';

function App() {
  return (
    <div className="App">
      
      {/* <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer /> */}
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
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
