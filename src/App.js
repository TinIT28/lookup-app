import "./App.scss";
import "./login.scss";
import Header from "./components/Layout/Header/Header";
import LoginForm from "./components/User/LoginForm";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NotFound from "./components/Layout/Error/NotFound";
import { HomePage } from "./components/User/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginForm></LoginForm>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
