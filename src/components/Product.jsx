import "../styles/reset.css";
import "../styles/main_styles.css";
import { motion } from "framer-motion";
import Weight from "./Weight";
import Energy from "./Energy";
import Category from "./Category";
import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
import AddCart from "./AddCart";
import BlockImage from "./BlockImage";
import Buttons from "./Buttons";
import React from "react";
import { footerContext } from "../App";

function Product({ Products }) {
  const { setCartSum, setActiveFooter } = React.useContext(footerContext);
  const [favourite, setFavourite] = React.useState(false);

  let firstPizza = [
    {
      price: Products.price,
      weight: Products.weight,
      energy: Products.energy,
      size: Products.size,
      type: Products.type,
      id: Products.id,
    },
  ];

  let allPizzas = firstPizza.concat(Products.additionalVariants);

  let typeArray = allPizzas.map((el) => {
    return el.type;
  });

  typeArray = Array.from(new Set(typeArray));

  let sizeArray = allPizzas.map((el) => {
    return el.size;
  });
  sizeArray = Array.from(new Set(sizeArray));

  return (
    <>
      <motion.div
        className="main_block"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <div className="text_block">
          <Category value={Products.category} />
          <Title value={Products.title} />
          <BlockImage source={Products.image} />
          <Description value={Products.description} />

          <div className="inline-info">
            <Weight value={0} />
            <Energy value={0} />
          </div>
          <Buttons
            sizeArray={sizeArray}
            typeArray={typeArray}
            setCurrentPizza={0}
          />
          <div className="price_box">
            <Price value={0} />
          </div>
          <div className="cart_box">
            <AddCart
              product={Products}
              value={0}
              setCartSum={setCartSum}
              setActiveFooter={setActiveFooter}
            />
            <div className="like">
              <svg
                onClick={() => setFavourite((state) => !state)}
                fill={favourite ? "#DC143C" : "grey"}
                id="icon"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1280.000000 1189.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
                    -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
                    634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
                    -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
                    408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
                    196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
                    -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
                    -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
                    610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default Product;
