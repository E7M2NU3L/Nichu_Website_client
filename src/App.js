import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { MegaMenuDefault } from "./utils/Navbar/Navbar";
import { Footer } from "./utils/Footer/Footer";
import Webinars from "./components/Webinars/Webinars";
import WebinarForm from "./components/WebinarRegister/webinarForm";
import MainReg from "./components/Login/utils/MainReg";

function App() {
  return (
    <>
      <BrowserRouter>
        <MegaMenuDefault />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/webinars" element = {<Webinars />} />
          <Route path="/register" element={<MainReg />} />
          <Route path="/webinar/register" element={<WebinarForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
