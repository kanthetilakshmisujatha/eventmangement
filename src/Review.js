import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Review = () => {
  const reviews = [
    { img: 'slide-2.jpeg', name: 'john deo', text:  "🌟An Unforgettable Experience!🌟We had the most amazing experience with Eventmangement Hub! From selecting the perfect venue to organizing every detail with precision, they made our event truly special. The food was delicious, the entertainment was fantastic, and the decorations were beyond our expectations. Their team is professional, friendly, and incredibly dedicated. Thank you for making our celebration a dream come true!"},
   
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">client's <span>review</span></h1>
      <center>
      <div className="review-slider swiper-container">
        <Swiper>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <FaQuoteRight />
                <div className="user">
                
                <img src={review.img} alt="" style={{ width: "300px", height: "500px" }} />
                

                  <div className="user-info">
                  <h3 style={{ color: "white",fontSize: "30px" }}>{review.name}</h3>
                  <span style={{ color: "white",fontSize: "30px" }}>happy clients</span>
                  
                  </div>

                </div>
                <p style={{ color: "white", fontSize: "30px" }}>{review.text}</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </center>
    </section>
  );
};

export default Review;