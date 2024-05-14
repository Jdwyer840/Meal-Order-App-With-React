import React from "react";
import Header from "./Components/Header/Header";
import MealsSummary from "./Components/MealsSummary/MealsSummary";
import Meals from "./Components/Meals/Meals";
import CartProvider from './Store/CartProvider';

function App() {
  return (
      <CartProvider>
          <Header />
          <MealsSummary />
          <Meals />
      </CartProvider>
  );
}

export default App;
