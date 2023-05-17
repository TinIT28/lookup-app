import "./App.scss";
import Header from "./components/Layout/Header/Header";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NotFound from "./components/Layout/Error/NotFound";
import Footer from './components/Layout/Footer/Footer';
import { HomePage } from './components/User/HomePage';
import LoginForm from './components/User/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
