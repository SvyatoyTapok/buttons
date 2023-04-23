import "./Buttons.css";
import React from "react";

function Buttons( props ) {
  const [activeType, setActiveType] = React.useState(1);

  const [activeSize, setActiveSize] = React.useState(1);

  const [open, setOpen] = React.useState(true);

  return (
    <div className="buttons">
      <div className="type">
        <div
          onClick={() => {
            setActiveType(1);
            setOpen(true);
            setActiveSize(1);
            props.onClick(props.defaultProduct)
          }}
          className={activeType === 1 ? "common clicked" : "common"}
        >
          Обычное тесто
        </div>

        <div
          onClick={() => {
            setActiveType(2);
            setOpen(false);
            setActiveSize(2);
            props.onClick(props.additionalVariants[2])
          }}
          className={activeType === 2 ? "thin clicked" : "thin"}
        >
          Тонкое тесто
        </div>
      </div>
      <div className="size">
        {open && (
          <div onClick={() => {setActiveSize(1); props.onClick(props.defaultProduct)}} className={activeSize === 1 ? "s clicked" : "s"}>
            Маленькая
          </div>
        )}

        {open ? (
          <div onClick={() => {setActiveSize(2); props.onClick(props.additionalVariants[0])}} className={activeSize === 2 ? "m clicked" : "m"}>
            Средняя
          </div>
        ) : (
          <div
            onClick={() => {setActiveSize(2); props.onClick(props.additionalVariants[2])}}
            className={activeSize === 2 ? "m_replaced clicked" : "m_replaced"}
          >
            Средняя
          </div>
        )}
        {open ? (
          <div onClick={() => {setActiveSize(3);props.onClick(props.additionalVariants[1])}} className={activeSize === 3 ? "l clicked" : "l"}>
            Большая
          </div>
        ) : (
          <div
            onClick={() => {setActiveSize(3);props.onClick(props.additionalVariants[3])}}
            className={activeSize === 3 ? "l_replaced clicked" : "m_replaced"}
          >
            Большая
          </div>
        )}
      </div>
    </div>
  );
}

export default Buttons;
