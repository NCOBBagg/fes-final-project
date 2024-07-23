import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import Moviecard from "./components/pages/Moviecard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/:id" element={<Movies />}></Route>
          <Route path="/moviecard/:imdbID" element={<Moviecard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
