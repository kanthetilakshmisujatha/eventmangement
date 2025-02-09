// import React from 'react';
// import Header from './Header';
// import Home from './Home';
// import Service from './Service';
// import About from './About';
// import Gallery from './Gallery';
// import Price from './Price';
// import Review from './Review';
// import Contact from './Contact';
// import Footer from './Footer';
// // import EventCreation from './EventCreation';
// import EventDashboard from './EventDashboard';
// import RealTimeAttendeeList from './RealTimeAttendeeList';

// // import ThemeToggler from './ThemeToggler';
// import Login from './Login';


// function App() {
//   return (
//     <div className="App">
     
//       <Header />
//       <Home />
     
//       <Service />
//       <About />
//       <Gallery />
//       {/* <EventCreation /> */}
//       <EventDashboard/>
//       <RealTimeAttendeeList/>
//       <Price />
//       <Review />
//       <Contact />
     
//       <Footer />
//       {/* <ThemeToggler/> */}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Service from './Service';
import About from './About';
import Gallery from './Gallery';
import Price from './Price';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';
import EventDashboard from './EventDashboard';
import RealTimeAttendeeList from './RealTimeAttendeeList';
import Login from './Login';
import Signup from './Signup';
import Guest from './Guest';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/guest" element={<Guest setIsLoggedIn={setIsLoggedIn} />} />
          <Route 
            path="/" 
            element={
              isLoggedIn ? (
                <>
                  <Home />
                  <Service />
                  <About />
                  <Gallery />
                  <EventDashboard />
                  <RealTimeAttendeeList />
                  <Price />
                  <Review />
                  <Contact />
                </>
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
