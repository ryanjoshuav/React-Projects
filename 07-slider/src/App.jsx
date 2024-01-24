import { useEffect, useState } from "react";
import people from "./data.js";
import Review from "./Review.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const App = () => {
  const [reviews, setReviews] = useState(people);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    // * without using remainder
    // const nextSlide = activeSlide === reviews.length - 1 ? 0 : activeSlide + 1;
    // setActiveSlide(nextSlide);

    // *using remainder
    // (3 + 1 ) % 4 = 4 % 4 = 0 so basically at clicking next at last index  sends the first index
    setActiveSlide((prev) => (prev + 1) % reviews.length);
  };
  const prevSlide = () => {
    // * without using remainder
    // const prevSlide = activeSlide === 0 ? reviews.length - 1 : activeSlide - 1;
    // setActiveSlide(prevSlide);

    // *using remainder
    // (0 - 1 + 4) % 4= 3 % 4 = 3 so basically clicking prev at first index  sends the last index
    setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [activeSlide]);

  return (
    <section className="section">
      <div className="section-center">
        {reviews.map((review, index) => (
          <Review
            {...review}
            index={index}
            key={review.id}
            activeSlide={activeSlide}
            reviews={reviews}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default App;
