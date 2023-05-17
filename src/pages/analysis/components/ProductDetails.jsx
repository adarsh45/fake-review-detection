import React from "react";

const ProductDetails = ({ details }) => {
  return (
    <div className="d-flex flex-column align-items-start">
      <img src={details.image_url} alt="product-img" className="product-img" />
      <h6 className="h6">{details.title}</h6>
      <p className="">Total Reviews: {details.review_count}</p>
      <div className="guide-review d-flex flex-row align-items-center justify-content-center gap-2">
        <div className="d-flex flex-row align-items-center gap-1">
          <div className="dot positive"></div>
          <span>Positive</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-1">
          <div className="dot negative"></div>
          <span>Negative</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-1">
          <div className="dot neutral"></div>
          <span>Neutral</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
