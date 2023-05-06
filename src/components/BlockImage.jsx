import "./BlockImage.css";
import {motion } from "framer-motion";
function BlockImage(props) {
  return (
    <div className="block_image">
      <motion.img
        className="pizza_image"
        alt="pizzaimage"
        src={props.source}
        
        transition={{
          duration:0.33,
        }}
        whileHover={{
          scale:1.03,
        }}
      />
    </div>
  );
}

export default BlockImage;
