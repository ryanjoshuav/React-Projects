import { useState } from "react";
import data from "./data/data.js";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const prevPerson = () =>
    index < 1 ? setIndex(data.length - 1) : setIndex(index - 1);

  const nextPerson = () =>
    index >= data.length - 1 ? setIndex(0) : setIndex(index + 1);
  const { name, job, image, text } = data[index];

  const randomPerson = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * data.length);
    } while (randomNumber === index);
    setIndex(randomNumber);
  };

  const content = (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
  return content;
};
export default Review;
