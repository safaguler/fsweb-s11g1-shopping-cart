import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContextProvider from "./contexts/CartContext";
import ProductContextProvider from "./contexts/ProductContext";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Navigation />

        {/* Routelar */}
        <main className="content">
          <ProductContextProvider>
            <Route exact path="/">
              <Products />
            </Route>
          </ProductContextProvider>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </main>
      </CartContextProvider>
    </div>
  );
}

export default App;
