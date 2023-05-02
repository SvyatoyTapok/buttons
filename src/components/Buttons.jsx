import "./Buttons.css";
import React from "react";
import { motion } from "framer-motion";
function Buttons(props) {
  const [activeTypeButton, setActiveTypeButton] = React.useState(0);
  const [activeSizeButton, setActiveSizeButton] = React.useState(0);
  if (props.additionalVariants[0].size !== props.mainArray.size) {
    props.additionalVariants.unshift({
      price: props.mainArray.price,
      weight: props.mainArray.weight,
      energy: props.mainArray.energy,
      size: props.mainArray.size,
      type: props.mainArray.type,
    });
  }
  if (props.additionalVariants[0].type !== props.mainArray.type) {
    props.additionalVariants.unshift({
      price: props.mainArray.price,
      weight: props.mainArray.weight,
      energy: props.mainArray.energy,
      size: props.mainArray.size,
      type: props.mainArray.type,
    });
  }
  let clickedTypeOfSizeArray = props.additionalVariants.filter(
    (obj) => obj.type === props.typeArray[activeTypeButton]
  );
  console.log(clickedTypeOfSizeArray);
  return (
    <div className="buttons">
      <div className="type">
        {props.typeArray.map((value, index) => (
          <motion.div
          
            whileTap={{
              scale: 1.1,
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
        {clickedTypeOfSizeArray.map((value, index) => (
          <motion.div
          
            whileTap={{
              scale: 1.1,
            }}
            className={activeSizeButton === index ? "current_buttons clicked" : "current_buttons"}
            onClick={() => {
              setActiveSizeButton(index);
              props.setCurrentPrice(clickedTypeOfSizeArray[index].price);
              props.setCurrentWeight(clickedTypeOfSizeArray[index].weight);
              props.setCurrentEnergy(clickedTypeOfSizeArray[index].energy);
            }}
            key={index}
          >
            {value.size}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
