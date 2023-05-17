const ReviewsList = ({ reviews }) => {
  return (
    <div className="reviews-container row">
      {reviews.length ? (
        reviews.map(({ content, content_sentiment_label }, index) => (
          <div className="col-md-12" key={index}>
            <div
              className={`review-card m-2 p-4 ${
                content_sentiment_label === "positive"
                  ? "positive"
                  : content_sentiment_label === "negative"
                  ? "negative"
                  : "neutral"
              }`}
            >
              <p className="review-text">
                {content.length < 400 ? content : content.slice(0, 400) + "..."}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div style={{ height: "calc(100vh - 64px)" }} className="d-flex">
          <div className="spinner-grow text-dark m-auto" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;
