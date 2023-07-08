import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import reviews from "./data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Review.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Review = () => {
  const renderNextButton = ({ isDisabled }) => {
    return <ArrowForwardIosIcon className='slideR' style={{ position: "absolute"}} />
  };
  const renderPrevButton = ({ isDisabled }) => {
    return <ArrowBackIosIcon className='slideL' style={{ position: "absolute" }} />
  };
  const items = reviews.map((ele) => {
    return (
      <>
      <div className="testimonial" key={ele.id}>
        <div className="img-wrapper">
          <img src={ele.image} alt="img" className="img" />
        </div>
        <p className="designation">{ele.job}</p>
        <p className="description">
          {ele.text}
          <span style={{marginLeft:'12px'}}>
            <img 
              width="20"
              height="15"
              src="https://img.icons8.com/external-zen-filled-royyan-wijaya/24/external-quote-right-communication-zen-filled-royyan-wijaya.png"
              alt="external-quote-right-communication-zen-filled-royyan-wijaya"
            />
          </span>
        </p>
      </div>
      
      
      </>
     
    );
  });

  const responsive = {
    0: { items: 1 },
    512: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1200: { items: 1 },
  };

  return (
    <div className="carousel-wrapper">
      <AliceCarousel
        mouseTracking
        infinite
        responsive={responsive}
        items={items}
        autoPlay
        renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
       

      />
    </div>
  );
};

export default Review;
