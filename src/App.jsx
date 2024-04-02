import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
