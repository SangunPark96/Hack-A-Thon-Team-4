import React, { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Process the feedback data here (e.g., send to backend, store in database)
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
            <label htmlFor="rating" className="form-label">
              Rate from 1 to 5 stars:
            </label>
            {/* Star Rating Component (You can use a library or implement it yourself) */}
            {/* Set the selected rating to the 'rating' state */}
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
              rows="4"
              maxLength={200}
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
