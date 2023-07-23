import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
