import "./styles/reset.css";
import "./styles/main_styles.css";
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
import LikeIcon from "./img/likeicon.png";
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

    size: "s",
    type: "common",
    id: "73f5cd52-2c0d-44a0-b902-d267501a35b1",

    additionalVariants: [
      {
        price: 200,
        weight: 900,
        energy: 2620,

        size: "m",
        type: "common",
        id: "43a76941-c7df-467f-9d43-834c80fb5dc2",
      },
      {
        price: 300,
        weight: 1100,
        energy: 300,

        size: "l",
        type: "common",
        id: "86544daa-6017-42c2-ab3e-cd689b675bae",
      },
      {
        price: 400,
        weight: 800,
        energy: 2340,

        size: "m",
        type: "thin",
        id: "0d716812-9557-4cee-9ed1-e9a8b6dd622f",
      },
      {
        price: 500,
        weight: 1000,
        energy: 2780,

        size: "l",
        type: "thin",
        id: "920f2164-8c0a-4000-ad6b-016d229f15a5",
      },
    ],
  };

  const [activeFooter, setActiveFooter] = React.useState(false);

  const [cartSum, setCartSum] = React.useState(0);

  return (
    <>
      <div className="main_block">
        <BlockImage source={Product.image} />
        <div className="text_block">
          <Category value={Product.category} />
          <Title value={Product.title} />
          <Description value={Product.description} />
          <div className="inline-info">
            <Weight value={Product.weight} />
            <Energy value={Product.energy} />
          </div>
          <Buttons array={Product.additionalVariants} />
          <div className="price_box">
            <Price value={Product.price} />
          </div>
          <div className="cart_box">
            <AddCart setCartSum={setCartSum} setActiveFooter={setActiveFooter} />
            <div className="like">
              <img src={LikeIcon} alt="LikeImg" />
            </div>
          </div>
        </div>
      </div>
      {activeFooter && (
        <div className="footer_box">
          <FooterCart value={cartSum} />
          <div className="footer_clear">
            <img src={TrashIcon} alt="TrashImg" className="icon_delete" />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
