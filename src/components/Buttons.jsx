import "./Buttons.css";
import React from "react";

function Buttons(props) {
  const upButtons = ["Обычное тесто", "Тонкое тесто"];
  const bottomButtons = ["Маленькая", "Средняя", "Большая"];

  const [activeTypeButton, setActiveTypeButton] = React.useState(0);
  const [activeSizeButton, setActiveSizeButton] = React.useState(0);
  const [deletedSmall, setDeletedSmall] = React.useState(false);

  return (
    <div className="buttons">
      <div className="type">
        {upButtons.map((value, i) => (
          <div
            key={value}
            onClick={() => {
              setActiveTypeButton(i);
              if (i === 1) {
                console.log("ya nazhal na thin");
              }
            }}
            className={activeTypeButton === i ? "type_buttons clicked" : "type_buttons"}
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
              setDeletedSmall(true);
            }}
            className={activeSizeButton === i ? "size_buttons clicked" : "size_buttons"}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
