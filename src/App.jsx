import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import Counter from "./components/Counter";




const App = () => {
  return (<div>
    <div> <Navbar/></div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
{/* <Counter/> */}
    </Routes>
   
    
  </div>)
};

export default App;
