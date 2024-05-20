import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SellerDetails from "./components/SellerDetails/SellerDetails";
import AddProperty from "./components/addproperty/AddProperty";
import SellerProperties from "./components/SellerProperties/SellerProperties";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/seller-details/:email" element={<SellerDetails />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/my-properties" element={<SellerProperties />} />
      </Routes>
    </>
  );
}

export default App;
