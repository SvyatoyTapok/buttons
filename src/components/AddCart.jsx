import React from "react";

function AddCart(props) {
  const handleClick = () => {
    props.setCartSum((prevValue) => prevValue + props.value);
    props.setActiveFooter(true);
  };
  return (
    <div onClick={handleClick} className="cart">
      В корзину
    </div>
  );
}
export default AddCart;
