import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>its time to celebrate! the best <span> event organizers </span></h3>
        <a href="#contact" className="btn">contact us</a>
      </div>
      <div className="swiper-container home-slider">
        <center>
      <img src="slide-24.jpeg" alt=""style={{ width: "800px", height: "700px" }} />
    </center>
        {/* <Swiper>
          <SwiperSlide><img src="slide1.jpeg" alt=""style={{ width: "800px", height: "700px" }} /></SwiperSlide>
          <SwiperSlide><img src="slide-2.jpeg" alt="" style={{ width: "800px", height: "700px" }}/></SwiperSlide>
          <SwiperSlide><img src="slide-3.jpeg" alt=""style={{ width: "800px", height: "700px" }} /></SwiperSlide>
          <SwiperSlide><img src="slide-24.jpeg" alt="" style={{ width: "800px", height: "700px" }}/></SwiperSlide>
          <SwiperSlide><img src="slide-25.jpeg" alt="" style={{ width: "800px", height: "700px" }}/></SwiperSlide>
          <SwiperSlide><img src="slide-27.jpeg" alt="" style={{ width: "800px", height: "700px" }}/></SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default Home;