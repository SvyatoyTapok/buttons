import React from "react";
import { motion } from "framer-motion";
import { footerContext } from "../App";
function FooterCart() {
  const { cartSum } = React.useContext(footerContext);
  return <motion.div className="black">Сумма вашего заказа: {cartSum} ₽</motion.div>;
}
export default FooterCart;
