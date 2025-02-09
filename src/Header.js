// import React from 'react';
// import "./App.css";


// function Header() {
//   return (
//     <header>
//       <nav>
//         <div className="logo" style={{  fontSize: "50px" }}><span>E</span>vent Management Platform</div>
//         <ul>
//           <li><a href="#home"><b>Home</b></a></li>
//           <li><a href="#service"><b>Services</b></a></li>
//           <li><a href="#about"><b>About</b></a></li>
//           <li><a href="#gallery"><b>Gallery</b></a></li>
//           <li><a href="#price"><b>Pricing</b></a></li>
//           <li><a href="#review"><b>Reviews</b></a></li>
//           <li><a href="#event-dashboard"><b>EventCreation</b></a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
// import React, { useState } from "react";
// import "./App.css";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header>
//       <nav>
//         <div className="logo" style={{ fontSize: "30px" }}>
//           <span>E</span>vent Management Platform
//         </div>
//         <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
//           ☰
//         </div>
//         <ul className={isOpen ? "nav-links open" : "nav-links"}>
//           <li><a href="#home"><b>Home</b></a></li>
//           <li><a href="#service"><b>Services</b></a></li>
//           <li><a href="#about"><b>About</b></a></li>
//           <li><a href="#gallery"><b>Gallery</b></a></li>
//           <li><a href="#price"><b>Pricing</b></a></li>
//           <li><a href="#review"><b>Reviews</b></a></li>
//           <li><a href="#event-dashboard"><b>EventCreation</b></a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from "react";
import "./App.css";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo" style={{ fontSize: "30px" }}>
          <span>E</span>vent Management Platform
        </div>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#home"><b>Home</b></a></li>
          <li><a href="#service"><b>Services</b></a></li>
          <li><a href="#about"><b>About</b></a></li>
          <li><a href="#gallery"><b>Gallery</b></a></li>
          <li><a href="#price"><b>Pricing</b></a></li>
          <li><a href="#review"><b>Reviews</b></a></li>
          <li>
            <a href="#event-dashboard">
              <b>EventCreation</b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
