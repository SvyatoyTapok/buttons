import "./Buttons.css";
import React from "react";
// import { motion } from "framer-motion";
// import Product from "./Product";
function Buttons(props) {
  const [activeTypeButton, setActiveTypeButton] = React.useState(0);
  const [activeSizeButton, setActiveSizeButton] = React.useState(0);
 
  return (
    <div className="buttons">
      <div className="type">
        {props.typeArray.map((el, index) => {
          return (
            <div
              key={index}
              className={
                activeTypeButton === index
                  ? "currentButtons clicked"
                  : "currentButtons"
              }
              onClick={() => setActiveTypeButton(index)}
            >
              {el}
            </div>
          );
        })}
      </div>
      <div className="size">
      {props.sizeArray.map((el, index) => {
          return (
            <div
              key={index}
              className={
                activeSizeButton === index
                  ? "currentButtons clicked"
                  : "currentButtons"
              }
              onClick={() => setActiveSizeButton(index)}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Buttons;
