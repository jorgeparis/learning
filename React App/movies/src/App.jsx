import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Card from "../components/Card";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Search/>
        <Card movies={{url:"fdf", name:'Ola', title:"Jorge"}}/>
      </div>
    </>
  );
}

export default App;
