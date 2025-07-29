import { useState } from "react";
import "./App.css";
import BurgerStack from "./components/BurgerStack/BurgerStack.jsx";
import IngredientList from "./components/IngredientList/IngredientList.jsx";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);

  const addToStack = (newItem) => {
    console.log(newItem.name, newItem.color);
    setStack([...stack, newItem]);
    const newArray = stack.filter((item) => {
      return newItem.name != item.name;
    });
    
  };

  const removeFromStack = (removedItem) => {
    console.log(removedItem.name);
    const newArray = stack.filter((item) => {
      return removedItem.name != item.name;
    });
    console.log(newArray);

    setStack(newArray);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          addToStack={addToStack}
        />
        <BurgerStack stack={stack} removeFromStack={removeFromStack} />
      </section>
    </main>
  );
};

export default App;
