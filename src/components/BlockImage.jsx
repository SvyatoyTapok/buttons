import "./BlockImage.css";

function BlockImage(props) {
  return (
    <div className="block_image">
      <img className="pizza_image" alt="pizzaimage" src={props.source} />
    </div>
  );
}

export default BlockImage;
