// import React from 'react';


// const Contact = () => {
//   return (
//     <section className="contact" id="contact">
//       <h1 className="heading"> <span>contact</span> us </h1>
//       <form action="">
//         <div className="inputBox">
//           <input type="text" placeholder="name" />
//           <input type="email" placeholder="email" />
//         </div>
//         <div className="inputBox">
//           <input type="number" placeholder="number" />
//           <input type="text" placeholder="subject" />
//         </div>
//         <textarea placeholder="your message" cols="30" rows="10"></textarea>
//         <input type="submit" value="send message" className="btn" />
//       </form>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Show success message

    // Hide message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading"> <span>Contact</span> Us </h1>

      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="inputBox">
          <input type="number" placeholder="Number" required />
          <input type="text" placeholder="Subject" required />
        </div>
        <textarea placeholder="Your message" cols="30" rows="10" required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>

      {/* Success Message Popup */}
      {submitted && <div className="popup">We will reach you soon!</div>}

      {/* CSS for Popup (Optional) */}
      <style>
        {`
          .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 5px;
            z-index: 1000;
            font-size: 18px;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
