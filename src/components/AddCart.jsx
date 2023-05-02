import React from "react";
import {motion } from "framer-motion";
function AddCart(props) {
  const handleClick = () => {
    props.setCartSum((lastValue) => lastValue + props.value);
    props.setActiveFooter(true);
  };
  return (
    <motion.div whileTap={{scale:1.1}} onClick={handleClick} className="cart">
      В корзину
    </motion.div>
  );
}
export default AddCart;
