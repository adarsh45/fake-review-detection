import React from "react";
import Footer from "../components/Footer";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="">
        <div className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className="p-4">
            Sentiment Analysis:
            <br />
            Fake Review Detection System
          </h1>
          <a href="/reviews" className="btn btn-dark m-4">
            Analyse Reviews now!
          </a>
        </div>

        <div className="row container p-4" style={{ margin: "auto" }}>
          <div className="col-md text-center d-flex align-items-center justify-content-center">
            <h2 className="topic">Introduction</h2>
          </div>
          <div className="col-md p-4 " style={{ textAlign: "justify" }}>
            Welcome to the world of sentiment analysis and fake review detection
            systems! In today's digital age, online reviews play a crucial role
            in shaping consumer decisions. However, the proliferation of fake
            reviews has become a growing concern for businesses and consumers
            alike. Sentiment analysis, a powerful tool rooted in natural
            language processing and machine learning, offers a promising
            solution to identify and weed out fake reviews. By analyzing the
            sentiment expressed in textual content, sentiment analysis
            algorithms can assess the authenticity and credibility of reviews,
            helping businesses and consumers make more informed decisions. In
            this introduction, we will delve into the intricacies of sentiment
            analysis, explore its applications in fake review detection, and
            uncover the methodologies behind these innovative systems.
          </div>
        </div>

        <div
          className="row container p-4 text-center"
          style={{ margin: "auto" }}
        >
          <div className="col-md p-4" style={{ textAlign: "justify" }}>
            The objective of this project is to develop a robust sentiment
            analysis system specifically tailored for fake review detection. By
            utilizing advanced natural language processing techniques and
            machine learning algorithms, the system aims to accurately analyze
            the sentiment expressed in textual content, distinguishing between
            genuine and fake reviews. The ultimate goal is to provide businesses
            and consumers with a reliable tool that can help identify and filter
            out fraudulent reviews, promoting transparency and trust in the
            online review ecosystem.
          </div>

          <div className="col-md text-center d-flex align-items-center justify-content-center">
            <h2 className="topic">Objective</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
