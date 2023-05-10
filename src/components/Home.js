import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <p>Welcome to the Home page!</p>
      </div>
    );
  }
}

export default Home;

// // import React from "react";
// import Header from "./Header";

// // const Home = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <div className="container">
// //         <h2>This is Home Page</h2>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { Component } from "react";
// import { Nav, Carousel } from "react-bootstrap";
// import image1 from "../images/desktop.PNG";
// import image2 from "../images/desktop.PNG";
// import image3 from "../images/desktop.PNG";
// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <Header />

//         {/* <Carousel>
//           <Carousel.Item>
//             <img className="d-block w-100" src={image1} alt="First slide" />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src={image2} alt="Second slide" />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src={image3} alt="Third slide" />

//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel> */}
//       </div>
//     );
//   }
// }

// export default Home;
