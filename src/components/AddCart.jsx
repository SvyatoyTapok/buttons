import React from "react";
import {motion } from "framer-motion";
function AddCart(props) {
  const Click = () => {
    props.setCartSum((lastValue) => lastValue + props.value);
    props.setActiveFooter(true);
    console.log("Да, " + props.product.title +  " правда неплохая")
  };
  return (
    <motion.div whileHover={{scale:1.05}} whileTap={{scale:1}} onClick={Click} className="cart">
      В корзину
    </motion.div>
  );
}
export default AddCart;
