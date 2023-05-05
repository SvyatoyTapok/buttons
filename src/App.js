import "./styles/reset.css";
import "./styles/main_styles.css";
import React from "react";
import Product from "./components/Product";
import TrashIcon from "./img/deleteicon.png";
import FooterCart from "./components/FooterCart";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [cartSum, setCartSum] = React.useState(0);
  const [activeFooter, setActiveFooter] = React.useState(false);
  return (
    <div className="global_block">
      <Product setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product1} />
      <Product setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product2} />
      <Product setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product3} />
      <AnimatePresence>
        {activeFooter && (
          <motion.div
            className="footer_box"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <FooterCart value={cartSum} />
            <div className="footer_clear">
              <img
                onClick={() => setCartSum(0)}
                src={TrashIcon}
                alt="TrashImg"
                className="icon_delete"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default App;
//thx for help, Artem and Andrey :D
