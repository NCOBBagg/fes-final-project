import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":id" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
