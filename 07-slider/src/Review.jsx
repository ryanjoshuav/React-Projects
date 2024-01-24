import { FaQuoteRight } from "react-icons/fa";
const Review = ({ image, title, name, quote, index, activeSlide, reviews }) => {
  // let classN;
  // if (activeSlide === index) classN = "activeSlide";
  // if (
  //   activeSlide - 1 === index ||
  //   (activeSlide === 0 && index === reviews.length - 1)
  // )
  //   classN = "prevSlide";
  // if (
  //   activeSlide + 1 === index ||
  //   (activeSlide === reviews.length - 1 && index === 0)
  // )
  //   classN = "nextSlide";
  return (
    <article
      style={{
        transform: `translateX(${(index - activeSlide) * 100}%)`,
        opacity: `${activeSlide === index ? 1 : 0}`,
      }}
    >
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight />
    </article>
  );
};
export default Review;
