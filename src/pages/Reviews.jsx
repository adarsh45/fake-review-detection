import React, { useState } from "react";

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [productURL, setProductURL] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating login request
    setTimeout(() => {
      // Perform login logic here

      setLoading(false);
    }, 2000);
  };
  return (
    <div className="container py-4">
      <form
        className="d-flex m-auto text-center flex-column gap-4"
        style={{ width: "30%" }}
        onSubmit={handleLogin}
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
              <span class="sr-only"></span>
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
