import "./Buttons.css";
import React from "react";

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
  let clickedTypeOfSizeArray = props.additionalVariants.filter(
    (obj) => obj.type === props.typeArray[activeTypeButton]
  );

  return (
    <div className="buttons">
      <div className="type">
        {props.typeArray.map((value, index) => (
          <div
            className={activeTypeButton === index ? "current_buttons clicked" : "current_buttons"}
            onClick={() => {
              setActiveTypeButton(index);
              if (index === 0) {
                setActiveSizeButton(0);
                props.setCurrentPrice(props.additionalVariants[0].price);
                props.setCurrentWeight(props.additionalVariants[0].weight);
                props.setCurrentEnergy(props.additionalVariants[0].energy);
              }
              if (index === 1) {
                setActiveSizeButton(0);
                props.setCurrentPrice(props.additionalVariants[3].price);
                props.setCurrentWeight(props.additionalVariants[3].weight);
                props.setCurrentEnergy(props.additionalVariants[3].energy);
              }
            }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="size">
        {clickedTypeOfSizeArray.map((value, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
