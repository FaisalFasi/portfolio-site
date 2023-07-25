import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/resume" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
