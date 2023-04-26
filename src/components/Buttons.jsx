import "./Buttons.css";
import React from "react";

function Buttons(props) {
  const typeArray = props.typeArray
  const defaultBottomButtons = props.sizeArray

  const [activeTypeButton, setActiveTypeButton] = React.useState(0);
  const [activeSizeButton, setActiveSizeButton] = React.useState(0);

  const [bottomButtons, setBottomButtons] = React.useState(defaultBottomButtons);

  const deleteSmall = () => {
    let smallButton = defaultBottomButtons.indexOf("Маленькая");
    if (smallButton !== -1) {
      defaultBottomButtons.splice(smallButton, 1);
    }
    setBottomButtons(defaultBottomButtons);
  };

const returnButton = () =>{
  if (bottomButtons[0] !== "Маленькая"){
    bottomButtons.unshift("Маленькая")
  }
}

  return (
    <div className="buttons">
      <div className="type">
        {typeArray.map((value, i) => (
          <div
            key={value}
            onClick={() => {

              setActiveTypeButton(i);
              if (i === 0) {
                setActiveSizeButton(0);
                returnButton()
              }
              if (i === 1) {
                deleteSmall();
                setActiveSizeButton(0);
              }
            }}
            className={activeTypeButton === i ? "current_buttons clicked" : "current_buttons"}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="size">
        {bottomButtons.map((value, i) => (
          <div
            key={value}
            onClick={() => {
              props.setCurrentPrice(props.array[i].price)
              setActiveSizeButton(i);
            }}
            className={activeSizeButton === i ? "current_buttons clicked" : "current_buttons"}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
