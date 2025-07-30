const Ingredient = (props) => {
  return (
    <>
      <li key={props.index} style={{ backgroundColor: props.ingredient.color }}>
        {props.ingredient.name}
        <button type="submit" onClick={props.onClick}>
          {props.isAdd ? "+" : "-"}
        </button>
      </li>
    </>
  );
};

export default Ingredient;
