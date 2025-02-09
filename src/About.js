import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us </h1>
      <div className="row">
        <div className="image">
          <img src="slide1.jpeg" alt="" style={{ width: "600px", height: "600px" }} />
          
        </div>
        <div className="content">
          <h3>we will give a very special celebration for you</h3>
          <p>At Eventmangement hub, we turn your special moments into unforgettable celebrations! With a passion for perfection and an eye for detail, we bring creativity, elegance, and seamless execution to every event. Whether it's a grand wedding, a corporate gathering, or an intimate birthday celebration, we ensure that every occasion is unique and extraordinary.

From concept to completion, our expert team works tirelessly to create experiences that reflect your vision and exceed expectations. Let us craft a celebration that is truly special—just for you!</p>
         
          <a href="#event-dashboard" className="btn">Click</a>
        </div>
      </div>
    </section>
  );
};

export default About;