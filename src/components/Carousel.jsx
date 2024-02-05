/* eslint-disable react/prop-types */
import { useState } from "react";
const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="carousel">
      <img src={images[active]} alt="" />
      <div className="carousel-smaller">
        {images.map((photo, idx) => (
          <img
            src={photo}
            className={idx === active ? "active" : ""}
            alt="animal photo"
            key={photo}
            onClick={(e) => setActive(+e.target.dataset.index)}
            data-index={idx}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
