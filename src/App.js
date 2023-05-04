import "./styles/reset.css";
import "./styles/main_styles.css";
import {motion } from "framer-motion";
import Weight from "./components/Weight";
import Energy from "./components/Energy";
import Category from "./components/Category";
import Title from "./components/Title";
import Description from "./components/Description";
import Price from "./components/Price";
import FooterCart from "./components/FooterCart";
import AddCart from "./components/AddCart";
import BlockImage from "./components/BlockImage";
import Buttons from "./components/Buttons";
import TrashIcon from "./img/deleteicon.png";
import React from "react";

function App() {
  const Product = {
    title: "8 Сезонов",
    category: "Пицца",
    description:
      "Колбаски, пепперони, халапеньо, шампиньоны, томаты, бекон, цыпленок, чеснок, огурцы соус Барбекю, соус Рэнч, фирменный томатный соус, моцарелла.",
    image: "https://joyspizza.ru/public/images/1647971207132-4seasons1.jpg",

    price: 100,
    weight: 700,
    energy: 2220,

    size: "Маленькая",
    type: "Обычное тесто",
    id: "73f5cd52-2c0d-44a0-b902-d267501a35b1",

    additionalVariants: [
      {
        price: 200,
        weight: 900,
        energy: 2620,

        size: "Средняя",
        type: "Обычное тесто",
        id: "43a76941-c7df-467f-9d43-834c80fb5dc2",
      },
      {
        price: 300,
        weight: 1100,
        energy: 300,

        size: "Большая",
        type: "Обычное тесто",
        id: "86544daa-6017-42c2-ab3e-cd689b675bae",
      },
      {
        price: 400,
        weight: 800,
        energy: 2340,

        size: "Средняя",
        type: "Тонкое тесто",
        id: "0d716812-9557-4cee-9ed1-e9a8b6dd622f",
      },

      {
        price: 500,
        weight: 1000,
        energy: 2780,

        size: "Большая",
        type: "Тонкое тесто",
        id: "920f2164-8c0a-4000-ad6b-016d229f15a5",
      },
      
    ],
  };

  const [activeFooter, setActiveFooter] = React.useState(false);
  const [cartSum, setCartSum] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(Product.price);
  const [currentWeight, setCurrentWeight] = React.useState(Product.weight);
  const [currentEnergy, setCurrentEnergy] = React.useState(Product.energy);

  let unsortedTypeArray = [];
  for (let i = 0; i < Product.additionalVariants.length; i++) {
    unsortedTypeArray.push(Product.additionalVariants[i].type);
  }

  let typeArray = unsortedTypeArray.unshift(Product.type);
  typeArray = Array.from(new Set(unsortedTypeArray));

  let unsortedSizeArray = [];
  for (let i = 0; i < Product.additionalVariants.length; i++) {
    unsortedSizeArray.push(Product.additionalVariants[i].size);
  }

  let sizeArray = unsortedSizeArray.unshift(Product.size);
  sizeArray = Array.from(new Set(unsortedSizeArray));

  return (
    <>
      <motion.div
      className="main_block"
      initial = {{
        opacity:0
      }}
      animate = {{
        opacity:1
      }}
      transition={{
        duration:2
      }}
      >
        <BlockImage source={Product.image} />
        <div className="text_block">
          <Category value={Product.category} />
          <Title value={Product.title} />
          <Description value={Product.description} />
          <motion.div
          className="inline-info"
          
          >
            <Weight value={currentWeight} />
            <Energy value={currentEnergy} />
          </motion.div>
          <Buttons
            mainArray={Product}
            sizeArray={sizeArray}
            typeArray={typeArray}
            setCurrentPrice={setCurrentPrice}
            setCurrentWeight={setCurrentWeight}
            setCurrentEnergy={setCurrentEnergy}
            additionalVariants={Product.additionalVariants}
          />
          <div 
          className="price_box">
            <Price value={currentPrice} />
          </div>
          <div
          className="cart_box"
          
          >
            <AddCart
              value={currentPrice}
              setCartSum={setCartSum}
              setActiveFooter={setActiveFooter}
            />
            <div className="like">
            <svg 
            id="icon" 
            version="1.0" 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 1189.000000"
            preserveAspectRatio="xMidYMid meet">
            
<g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
-2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
-2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
-193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
-535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
</g>
</svg>
            </div>
          </div>
        </div>
      </motion.div>
      {activeFooter && (
        <div className="footer_box">
          <FooterCart value={cartSum} />
          <div className="footer_clear">
            <img
              onClick={() => setCartSum(0)}
              src={TrashIcon}
              alt="TrashImg"
              className="icon_delete"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
//thx for help, Artem and Andrey :D
