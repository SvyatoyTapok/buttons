import "./styles/reset.css";
import "./styles/main_styles.css";
import React from "react";
import FirstProduct from "./components/FirstProduct"
import SecondProduct from "./components/SecondProduct"
import ThirdProduct from "./components/ThirdProduct"
import TrashIcon from "./img/deleteicon.png"
import FooterCart from "./components/FooterCart";
function App() {

  const Product1 = {
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
  const Product2 = {
    title: "Бурритос",
    category: "Пицца",
    description:
      "Кукуруза, репчатый лук, томаты, фасоль, цыпленок Фахитос, моцарелла, пикантный соус Сальса.",
    image: "https://joyspizza.ru/public/images/1598450046200-TeleClub41.jpg",
  
    price: 500,
    weight: 1000,
    energy: 640,
  
    size: "Большая",
    type: "Тонкое тесто",
    id: "73f5cd52-2c0d-44a0-b902-86544daa",
  
    additionalVariants: [
      {
        price: 650,
        weight: 1320,
        energy: 830,
  
        size: "XL",
        type: "Тонкое тесто",
        id: "86544daa-6017-42c2-ab3e-73f5cd52",
      },
    ],
  };

  const Product3 = {
    title: "Густо де Эспанья",
    category: "Пицца",
    description: "бекон, ветчина, шампиньоны, томаты, сырный соус Чеддер, сыр моцарелла.",
    image: "https://joyspizza.ru/public/images/1647971531738-1577650129425-TelePizzDek039.jpg",
  
    price: 300,
    weight: 700,
    energy: 410,
  
    size: "Маленькая",
    type: "Обычное тесто",
    id: "73f5cd52-2c0d-44a0-b902-44a0b9022c0d",
  
    additionalVariants: [
      {
        price: 450,
        weight: 820,
        energy: 430,
  
        size: "Большая",
        type: "Обычное тесто",
        id: "86544daa-6017-42c2-ab3e601742c2ab3e",
      },
      {
        price: 600,
        weight: 1100,
        energy: 570,
  
        size: "Большая",
        type: "Тонкое тесто",
        id: "4daaab3e-6017-ab3e-42c2-601748654",
      },
      {
        price: 300,
        weight: 600,
        energy: 200,
  
        size: "Маленькая",
        type: "Тонкое тесто",
        id: "920f8c0a-4000-9f15a5-ad6b-016d22123a",
      },
      {
        price: 700,
        weight: 1500,
        energy: 800,
  
        size: "XL",
        type: "Тонкое тесто",
        id: "8601742daa-6017-86544daa-2c0d2ab3e",
      },
    ],
  };

  const [cartSum, setCartSum] = React.useState(0);
  const [activeFooter, setActiveFooter] = React.useState(false);

  return (
    <div className="global_block">
    <FirstProduct setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product1}/>
    <SecondProduct setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product2}/>
    <ThirdProduct setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product3}/>
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
    </div>
  );
}
export default App;
//thx for help, Artem and Andrey :D
