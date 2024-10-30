import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/"/>
        <Route path="/products/:category" />
        <Route path="/product/:id" />
        <Route path="/cart" />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
    </Router>
  );
};

export default App;
