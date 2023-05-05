import React from "react";
import { motion } from "framer-motion";
function FooterCart(props) {
  return (
  <motion.div className="black">Сумма вашего заказа: {props.value} ₽</motion.div>
  )
}
export default FooterCart;
