import Ingredient from "../Ingredient/Ingredient.jsx";

const IngredientList = (props) => {
  return (
    <>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          // <li key={index} style={{ backgroundColor: ingredient.color}}>
          //   {ingredient.name}
          //   <button type='submit' onClick={()=>props.addToStack(ingredient)}>+</button>
          // </li>
          <Ingredient
            ingredient={ingredient}
            index={index}
            onClick={() => props.addToStack(ingredient)}
            isAdd={true}
          />
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
