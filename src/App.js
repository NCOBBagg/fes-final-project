import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Nav from "./components/ui/Nav";
import Movies from "./components/pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Nav />
          <Route path="/" element={<Home />}></Route>
          <Route></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
