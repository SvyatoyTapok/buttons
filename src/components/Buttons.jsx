import "./Buttons.css";
import React from "react";
import { motion } from "framer-motion";
// import Product from "./Product";
function Buttons(props) {
  const [activeTypeButton, setActiveTypeButton] = React.useState(0);
  const [activeSizeButton, setActiveSizeButton] = React.useState(0);





  return (
    <div className="buttons">
      <div className="type">
        {props.typeArray.map((value, index) => (
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            className={activeTypeButton === index ? "current_buttons clicked" : "current_buttons"}
            onClick={() => {
              setActiveTypeButton(index);
              setActiveSizeButton(0);

              

             
             
            }}
            key={index}
          >
            {value}
          </motion.div>
        ))}
      </div>
      <div className="size">
        
      </div>
    </div>
  );
}

export default Buttons;
