import React from "react";
import UniNavbar from "../UniNavbar";
import PubNav from "./Pub-navbar/PubNav";
import "./Patents.css";

function Patents() {
  return (
    <div>
      <UniNavbar />
      <PubNav />
      <div>
        <h1 className="mainhead-pub">Patents</h1>
        <p className="ptnt">
          Title: System and Method for Recommending Background Music for Books
          Using Machine Learning Models
          <br />
          Patent Number: US 12326898
          <br />
          Application Number: US 17/985,043
          <br />
          Date of Grant: June 10, 2025
        </p>
      </div>
    </div>
  );
}

export default Patents;
