const BurgerStack = (props) => {
  return (
    <>
      <ul>
        {props.stack.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.color }}>
            {item.name}
            <button type="submit" onClick={()=> props.removeFromStack(item)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;
