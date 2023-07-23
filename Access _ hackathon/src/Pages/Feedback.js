import React, { useState } from "react";
import "../Styles/Feedback.css";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Share Your Thoughts</h1>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Please Rate from 1 to 5 stars:
            </label>{" "}
            <br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="rating"
                id="star5"
                value="5"
                onChange={() => setRating(5)}
                required // Make rating mandatory
                className="form-check-input"
              />
              <label htmlFor="star5" className="form-check-label">
                5 stars
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="rating"
                id="star4"
                value="4"
                onChange={() => setRating(4)}
                className="form-check-input"
              />
              <label htmlFor="star4" className="form-check-label">
                4 stars
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="rating"
                id="star3"
                value="3"
                onChange={() => setRating(3)}
                className="form-check-input"
              />
              <label htmlFor="star3" className="form-check-label">
                3 stars
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="rating"
                id="star2"
                value="2"
                onChange={() => setRating(2)}
                className="form-check-input"
              />
              <label htmlFor="star2" className="form-check-label">
                2 stars
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="rating"
                id="star1"
                value="1"
                onChange={() => setRating(1)}
                className="form-check-input"
              />
              <label htmlFor="star1" className="form-check-label">
                1 star
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Your Valuable Feedback (optional):
            </label>
            <textarea
              className="form-control"
              id="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              rows="3"
              style={{ maxWidth: "300px", margin: "0 auto" }} // Adjust the width and center the text area
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
