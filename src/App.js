import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { MegaMenuDefault } from "./utils/Navbar/Navbar";
import { Footer } from "./utils/Footer/Footer";
import Webinars from "./components/Webinars/Webinars";
import Regiter from "./components/Login/Regiter";
import Personal from "./components/Login/Personal";
import WebinarRegister from "./components/WebinarRegister/WebinarRegister";
import Webinarpayment from "./pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <MegaMenuDefault />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/webinars" element = {<Webinars />} />
          <Route path="/register" element={<Regiter />} />
          <Route path="/signup" element={<Personal />} />
          <Route path="/webinar/register" element={<WebinarRegister />} />
          <Route path="/webinar/register/payment" element={<Webinarpayment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
