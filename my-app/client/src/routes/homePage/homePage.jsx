import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Discover a wide range of properties tailored to your preferences and budget. Our platform offers an intuitive search experience, allowing you to effortlessly explore and find homes that meet your needs. With comprehensive property listings, detailed descriptions, and high-quality images, you can confidently choose your next home. Start your journey today and unlock the door to your dream property!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>1 Million</h1>
              <h2>Customers Served</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Awards Received</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
