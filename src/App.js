import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./utils/Navbar/Navbar";
import { Footer } from "./utils/Footer/Footer";
import Webinars from "./components/Webinars/Webinars";
import Profile from "./pages/Profile";
import Courses from "./components/Courses/Courses";
import Register from "./components/Login/Register";
import Gallery from "./pages/Gallery";
import CourseEnroll from "./components/CourseForm/CourseEnroll";
import WebinarEnroll from "./components/WebinarRegister/WebinarEnroll";
import Cart from "./pages/Cart";
import WebinarPayment from "./pages/WebinarPayment";
import CoursePayment from "./pages/CoursePayment";
import FetchAlWebinars from "./components/Webinars/FetchAlWebinars";
import SingleCourse from "./components/Courses/SingleCourse";
import ProfileEdit from "./components/Profile/ProfileEdit";
import IsLoggedin from "./middlewares/IsLoggedin";
import CourseDetails from "./components/Courses/course-details";
import WebinarAlt from "./components/Webinars/webinar-alt";
import Products from "./pages/products";
import SingleProduct from "./pages/single-product";
import BuyProduct from "./pages/product-buy";
import AboutUs from "./pages/about-us";
import SingleEvent from "./pages/single-event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />

          <Route path = "/login" element = {<Login />} />
          <Route path = "/webinars" element = {<FetchAlWebinars />} />
          <Route path="/webinars/:id" element={
            <IsLoggedin>
              <WebinarAlt />
            </IsLoggedin>
          } />

          <Route path="/register" element={<Register />} />
          
          <Route path="/webinar/register" element={<WebinarEnroll />} />
          <Route path="/webinar/payment" element={<WebinarPayment />} />
         
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products/buy/:id" element={<BuyProduct />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/update" element={<ProfileEdit />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/register" element={<CourseEnroll />} />
          <Route path="/course/payment" element={<CoursePayment />} />
          <Route path="/courses/single/:id" element={<SingleCourse />} />
          <Route path="/courses/details/:id" element={<CourseDetails />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<SingleEvent />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
