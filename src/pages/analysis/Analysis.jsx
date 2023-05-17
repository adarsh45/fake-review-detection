import { useEffect, useState } from "react";
import ReviewsList from "./components/ReviewsList";
import axios from "axios";
import ProductDetails from "./components/ProductDetails";
import "./analysis.css";

const DEFAULT_REVIEWS = [
  {
    content:
      "I recently purchased the Apple 2020 MacBook Air Laptop with M1 chip and I must say, I'm quite impressed with its performance. The M1 chip is a game-changer and offers unparalleled speed and efficiency, making it a joy to use. The 13.3-inch Retina Display is stunning and provides crisp, clear visuals that are easy on the eyes. The laptop comes with 8GB RAM and 256GB SSD Storage, which offers ample space to store files and run multiple applications without any lag. The Backlit Keyboard is comfortable to use, and the FaceTime HD Camera provides clear video quality for virtual meetings. One of the standout features of this laptop is the Touch ID feature. It is incredibly convenient and makes it quick and easy to unlock the laptop without having to remember passwords. This feature, combined with the overall speed and efficiency of the M1 chip, makes for a smooth and seamless user experience. Additionally, the laptop works seamlessly with iPhone and iPad, making it convenient to share files and work across multiple devices. However, there are a few drawbacks to this laptop that led me to give it a 4-star rating. Firstly, the laptop tends to heat up quite a bit during intensive tasks, such as video editing or running multiple applications simultaneously. This can be quite uncomfortable and sometimes even affect performance. Secondly, the battery life could be better, as it drains fairly quickly during heavy usage. This is a bit of a letdown, as one of the key benefits of the M1 chip was supposed to be its efficiency and battery life. Finally, the lack of ports is a bit of a drawback. The laptop only comes with two Thunderbolt 3 ports, which means that users will need to purchase additional dongles or hubs to connect other devices. This can be inconvenient and adds to the overall cost of the laptop. Additionally, the absence of an SD card slot is a bit of a bummer, as it is a commonly used port by photographers and videographers. In conclusion, the Apple 2020 MacBook Air Laptop with M1 chip is a great investment and offers a lot of features and benefits, but it does have some drawbacks. It is a powerful and efficient machine that is great for everyday use, but it may not be the best choice for professionals who require more intensive applications. Despite the drawbacks, I would still recommend it to anyone in the market for a high-performance laptop that offers speed, efficiency, and convenience. Bullet points: The M1 chip provides unparalleled speed and efficiency The 13.3-inch Retina Display is stunning and provides crisp, clear visuals The Backlit Keyboard is comfortable to use, and the FaceTime HD Camera provides clear video quality The Touch ID feature is incredibly convenient and makes it quick and easy to unlock the laptop without having to remember passwords The laptop works seamlessly with iPhone and iPad, making it convenient to share files and work across multiple devices The laptop tends to heat up quite a bit during intensive tasks The battery life could be better, as it drains fairly quickly during heavy usage The lack of ports, particularly the absence of an SD card slot, is a bit of a drawback",
    content_sentiment_label: "positive",
  },
  {
    content:
      "Have been using dell xps 13 for a few years with very good configuration for all my work and am pissed off with the battery and the windows updates and ended-up with misery on some occasions. To get out of the, started to search and finally read quite a bit about Mac book air for my requirements and my research paid off very well and I am happy with the mac book air. Awesome, go for it without a second thought.",
    content_sentiment_label: "negative",
  },
  {
    content:
      "Its still the M1 but it beats the intel macbook air. Also it doesn’t overheat and its very smooth to work with. Display is good. Performance is good. I don’t use it for heavy work but i have done some tests and it can do rendering very fast. It packs quite a punch and i love using it. Its lightweight and the battery lasts for a long time.",
    content_sentiment_label: "positive",
  },
  {
    content:
      "Bought it during summer sale and with generous cash back of 3000 I felt it was a good deal for those without any credit card. Regarding the Mac its simply beautiful, with its all metal/ aluminium body, amazing keys and gorgeous display its a joy to use. The OS on other side will take some time getting used to. But have to say it definitely looks more polished and slick compared to Windows 11.",
    content_sentiment_label: "positive",
  },
  {
    content:
      "Got a very good deal of 66k including exchange of 10k and the laptop is totally worth it. I already have one, it runs flawlessly bought this for my brother. M1 chip is best, also the battery backup is outstanding.",
    content_sentiment_label: "positive",
  },
  {
    content:
      "MacBook Air m1 (8GB, 256 GB) - Gold variant My thoughts on after using for 1 year still the best for the budget spent on laptop. It has amazing battery life, instant wake up time from screen lock, software updates, good for media consumption for long time, no stutters while using and executing  code with IT softwares, sidecar, mirroring to apple devices is smooth, universal control. And I have stopped using iPad once I bought MacBook. Only issue I faced was the charger included in box is faulty. when plugged in to wall socket to laptop, can feel the laptop body getting shock. I have purchased dual usb c charger from apple and using it. charger quality could have been better during quality checks.",
    content_sentiment_label: "positive",
  },
  {
    content:
      "The media could not be loaded. An absolute pleasure using this laptop! I have been an windows user for the last 13years and yeah switching is a bit difficult at first but after a few days, this becomes a productive beast. Things get done soo quicker, smoother with the 8Core M1 CPU and 7Core GPU. The screen is absolutely stunning and the sound is really good. This has been the best purchase!! I guess this has turned me into a apple fanboy lol",
    content_sentiment_label: "positive",
  },
  {
    content:
      "Wua.... better than any Intel based laptops costs between 60k to 1L",
    content_sentiment_label: "positive",
  },
  {
    content:
      "I get 6-8hrs of screen on time with wifi and bluetooth so actually portable as I dont need to carry charger everywhere and when I close it on friday and open it Monday battery percentage is only decreased 1-2% unbelievable why can't windows laptops be like this? all windows laptops I used is zero battery by Monday morning. Not all positive sometimes I see beachball with teamviewer and notes app updates didnt fix it yet.Apple alternatives for MS office is not upto mark, word documents have fonts scrambled so have to install MS office for office work anyway.",
    content_sentiment_label: "neutral",
  },
  {
    content:
      "1. laptop is getting off below 80% battery  life and suddenly showing 10% battery life, after plugging the adapter suddenly showing 70-80% battery life. 2. This issue was from the beginning the battery life was in normal condition then i updated the software again and reset the smc now its working fine.",
    content_sentiment_label: "positive",
  },
];

const imageNamesList = [
  // "network_neg_chart.png",
  "bar_chart.png",
  "pie_chart.png",
  "scatter_chart.png",
  "heatmap_chart.png",
  "network_neu_chart.png",
  "wordcloud_neg_chart.png",
  "wordcloud_chart.png",
  "network_chart.png",
  "wordcloud_neu_chart.png",
];

const Analysis = () => {
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);

  const [details, setDetails] = useState();
  const [reviews, setReviews] = useState([]);
  const [images, setImages] = useState([]);
  const [productUrl, setProductUrl] = useState("");

  const handleFetchDetails = () => {
    setLoadingDetails(true);

    let data = JSON.stringify({
      url: productUrl,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/productdetails`,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        let productDetails = response.data;
        console.log(productDetails);
        setDetails(productDetails);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingDetails(false);
      });
  };

  const handleFetchReviews = () => {
    setLoadingReviews(true);

    let data = JSON.stringify({
      url: productUrl,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/sentiment`,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        let reviewsList = JSON.parse(response.data);
        reviewsList = reviewsList.slice(0, 100);
        console.log(reviewsList);
        setReviews(reviewsList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingReviews(false);
      });
  };

  const fetchImage = (imageName) => {
    let data = JSON.stringify({
      filename: imageName,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKEND_URL}/images`,
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data: data,
    };

    return new Promise((resolve, reject) => {
      axios
        .request(config)
        .then((response) => {
          let imgUrl = URL.createObjectURL(response.data);
          console.log(imgUrl);
          resolve(imgUrl);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    if (localStorage) {
      setProductUrl(localStorage.getItem("url"));
    }
  }, []);

  useEffect(() => {
    if (productUrl) {
      handleFetchDetails();
      handleFetchReviews();
    }
  }, [productUrl]);

  useEffect(() => {
    if (reviews.length) {
      const handleFetchImages = async () => {
        setLoadingImages(true);
        const imgList = [];
        for (let i = 0; i < imageNamesList.length; i++) {
          const imageName = imageNamesList[i];
          const url = await fetchImage(imageName);
          imgList.push(url);
        }
        setImages(imgList);
        setLoadingImages(false);
      };
      handleFetchImages();
    }
  }, [reviews]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          {details && setLoadingDetails ? (
            <ProductDetails details={details} />
          ) : (
            <div style={{ height: "calc(100vh - 64px)" }} className="d-flex">
              <div className="spinner-grow text-dark m-auto" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-8">
          <h3 className="h3 text-start p-2">Reviews</h3>

          <ReviewsList reviews={reviews} />
        </div>
      </div>

      <h3 className="h3 text-center p-4">Statistics</h3>

      <div className="row p-4">
        {images.length
          ? images.map((imageUrl, index) => (
              <div key={index} className="col-md-6 my-4 text-center">
                <img
                  src={imageUrl}
                  style={{ width: "400px" }}
                  alt="stats-img"
                />
                <hr />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Analysis;
