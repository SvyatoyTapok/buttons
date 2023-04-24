import "./Buttons.css";
import React from "react";

function Buttons(props) {
  const upButtons = ["Обычное тесто", "Тонкое тесто"];
  const bottomButtons = ["Маленькая", "Большая"];
  return (
    <div className="buttons">
      <div className="type">
        {upButtons.map((value) => (
          <div key={value} className="type_buttons clicked">
            {value}
          </div>
        ))}
      </div>
      <div className="size">
        {bottomButtons.map((value) => (
          <div key={value} className="size_buttons clicked">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
