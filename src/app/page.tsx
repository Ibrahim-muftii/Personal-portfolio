import HomeHeader from "./HomeComponent/header";
import TechStack from "./HomeComponent/TechStack";
import './HomeComponent/Home.css';
import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      <header className="w-full h-[85vh] bg-white/5">
        <HomeHeader />
      </header>
      <TechStack />

    </React.Fragment>
  )
}

export default Home;
