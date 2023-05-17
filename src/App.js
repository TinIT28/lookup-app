import "./App.scss";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm></LoginForm>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
