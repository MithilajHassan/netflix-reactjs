import React from "react";
import './App.css'
import Navbar from "./componets/Navbar/Navbar";
import { originals,action, comedy, adventure, drama } from "./url";
import Banner from "./componets/Banner/Banner";
import RowPost from "./componets/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={adventure} title="Adventure" isSmall />
      <RowPost url={drama} title="Drama" isSmall />
    </div>
  );
}

export default App;
