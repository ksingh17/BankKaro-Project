// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index.js";
import HeroBanner from "./components/HeroBanner/index.js";
import Features from "./components/Features/index.js";
import PopularCreditCards from "./components/PopularCreditCards/index.js";
import LoungeFinder from "./components/LoungeFinder/index.js";
import Impact from "./components/Impact/index.js";
import CompareCards from "./components/CompareCards/index.js";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <HeroBanner/>
      <Features/>
      <PopularCreditCards/>
      <CompareCards/>
      <LoungeFinder/>
      <Impact/>
      <Footer />
    </div>
  );
};

export default App;
