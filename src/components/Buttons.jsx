import "./Buttons.css";
import React from "react";

function Buttons(props) {
  const [activeTypeButton, setActiveTypeButton] = React.useState(0);
  const [activeSizeButton, setActiveSizeButton] = React.useState(0);

  


   let clickedTypeFilteredArray = props.additionalVariants.filter(
      (obj) => obj.type === props.typeArray[activeTypeButton]
    );
 console.log(clickedTypeFilteredArray)
  return (
    <div className="buttons">
      <div className="type">
        {props.typeArray.map((value, index) => (
          <div
            className={activeTypeButton === index ? "current_buttons clicked" : "current_buttons"}
            onClick={() => {
              setActiveTypeButton(index);
          
            }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="size">
        {props.sizeArray.map((value, index) => (
          <div
            className={activeSizeButton === index ? "current_buttons clicked" : "current_buttons"}
            onClick={() => {
              setActiveSizeButton(index);
            }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
