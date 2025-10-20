import React, { useState } from "react";

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { author, job, text, image, id } = reviews[index];

  function handlePrev() {
    const prevIndex = (index - 1 + reviews.length) % reviews.length;
    setIndex(prevIndex);
  }
  function handleNext() {
    const nextIndex = (index + 1) % reviews.length;
    setIndex(nextIndex);
  }

  function supriseMe() {
    const randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }

  return (
    <div
      className="review"
      style={{ width: "clamp(200px, 100%, 500px)", margin: "auto" }}
    >
      <h1 id={`author-${id}`} className="author">
        {author}
      </h1>
      <p className="job">{job}</p>
      <img
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
        src={image}
        alt="image"
        className="person-img"
      />
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={handlePrev}>
        previous
      </button>
      <button className="next-btn" onClick={handleNext}>
        next
      </button>
      <button className="random-btn" onClick={supriseMe}>
        surprise me
      </button>
    </div>
  );
};

export default Review;
