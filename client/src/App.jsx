import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="projects" element={<Projects />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<PrivateRoute/>}>
        <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <FooterCom/>
    </BrowserRouter>
  );
}

export default App;
