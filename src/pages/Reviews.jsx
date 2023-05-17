import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [productURL, setProductURL] = useState("");
  const navigate = useNavigate();

  const handleFetchReviews = (e) => {
    e.preventDefault();
    localStorage.setItem("url", productURL);
    navigate("/analysis");
  };
  return (
    <div className="container py-4">
      <form
        className="d-flex m-auto text-center flex-column gap-4"
        style={{ width: "30%" }}
        onSubmit={handleFetchReviews}
      >
        <h2 className="h2">Analyse Reviews</h2>
        <input
          className="form-control"
          type="text"
          placeholder="Amazon product URL"
          value={productURL}
          onChange={(e) => setProductURL(e.target.value)}
        />

        <button type="submit" className="btn btn-dark">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Analyse"
          )}
        </button>
      </form>
    </div>
  );
};

export default Reviews;
