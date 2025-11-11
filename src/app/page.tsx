import HomeHeader from "./HomeComponent/header";
import TechStack from "./HomeComponent/TechStack";
import './HomeComponent/Home.css';
import React from "react";
import AboutMe from "./HomeComponent/AboutMe";
import BlurryBlob from "./HomeComponent/BlurryBlob";
import Services from "./HomeComponent/Services";
import Portfolios from "./HomeComponent/Portfolio";
const Home = () => {
  return (
    <React.Fragment>
      <header className="relative w-full h-screen overflow-hidden">
        <BlurryBlob/>
        <div className="relative z-10">
          <HomeHeader />
        </div>
      </header>
      <TechStack />
      <AboutMe />
      <Services />
      <Portfolios/>
    </React.Fragment>
  )
}

export default Home;
