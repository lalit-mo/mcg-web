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
          <b>Title:</b> System and method for identifying soundtrack for a digital
          book using a movie adaptation technique
          <br />
          <b>Patent Number:</b> US 12482501 B2
          <br />
          <b>Granted / Published:</b> Nov 25, 2025
          <br />
          <b>Inventors:</b> Alluri, V.; Tapaswi, M.; Shriram, J.
          <br />
          <b>Assignee:</b> International Institute of Information Technology Hyderabad
        </p>

        <p className="ptnt">
          <b>Title:</b> System and Method for Recommending Background Music for Books
          Using Machine Learning Models
          <br />
          <b>Patent Number:</b> US 12,326,898
          <br />
          <b>Granted / Published:</b> June 10, 2025
          <br />
          <b>Inventors:</b> Alluri, V.; Yadav, P.; Kala, D.; Mankodi, N.; Hanji, S.
          <br />
          <b>Assignee:</b> —
        </p>
      </div>
    </div>
  );
}

export default Patents;
