import "./styles/reset.css";
import "./styles/main_styles.css";
import React from "react";
import FirstProduct from "./components/FirstProduct";
import SecondProduct from "./components/SecondProduct";
import ThirdProduct from "./components/ThirdProduct";
import TrashIcon from "./img/deleteicon.png";
import FooterCart from "./components/FooterCart";
import Product1 from "./Product1"
import Product2 from "./Product2"
import Product3 from "./Product3"
function App() {

  const [cartSum, setCartSum] = React.useState(0);
  const [activeFooter, setActiveFooter] = React.useState(false);

  return (
    <div className="global_block">
      
      <FirstProduct setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product1} />
      <SecondProduct setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product2} />
      <ThirdProduct setCartSum={setCartSum} setActiveFooter={setActiveFooter} Product={Product3} />
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
