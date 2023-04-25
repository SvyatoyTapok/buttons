import "./Buttons.css";
import React from "react";

function Buttons(props) {

  const myArray = props.array
  console.log(myArray)


  const upButtons = ["Обычное тесто", "Тонкое тесто"];
  const defaultBottomButtons = ["Маленькая", "Средняя", "Большая"];

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
 
  return (
    <div className="buttons">
      <div className="type">
        {upButtons.map((value, i) => (
          <div
            key={value}
            onClick={() => {
              setActiveTypeButton(i);
              if (i === 0) {
                setBottomButtons(defaultBottomButtons)
                setActiveSizeButton(0);
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
