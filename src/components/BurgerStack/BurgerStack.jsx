import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <>
      <ul>
        {props.stack.length > 0 ? (
          props.stack.map((item, index) => (
            // <li key={index} style={{ backgroundColor: item.color }}>
            //   {item.name}
            //   <button type="submit" onClick={()=> props.removeFromStack(item)}>-</button>
            // </li>
            <Ingredient
              ingredient={item}
              index={index}
              onClick={() => props.removeFromStack(item)}
              isAdd={false}
            />
          ))
        ) : (
          <p>Your Burger is empty</p>
        )}
      </ul>
    </>
  );
};

export default BurgerStack;
