import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Translations from "./pages/Translations";
import Interpreting from "./pages/Interpreting";
import Proofreading from "./pages/Proofreading";
import TextEditing from "./pages/TextEditing";
import Courses from "./pages/Courses";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/interpreting" element={<Interpreting />} />
          <Route path="/proofreading" element={<Proofreading />} />
          <Route path="/textediting" element={<TextEditing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
