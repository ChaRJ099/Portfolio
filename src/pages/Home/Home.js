import React from "react";
import logo from '../../assets/logo.svg';
import Header from "../../components/Header/Header";
// import "./home.scss";

function Home() {
  return (
  <>
  <Header />
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
  </>
 );
}

export default Home;