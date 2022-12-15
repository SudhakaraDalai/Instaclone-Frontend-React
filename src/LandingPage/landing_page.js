import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../Images/Home.jpg"
import "../Styles/landingPage.css";

export default function Landingpage() {
  return (
    <div className="landing">
          <div className="landing-image">
            <img src={landingImage} alt="landing"/>
          </div>

          <div className="landing-actions">
              <div className="landing-text">10x Team 04</div>
              <Link to="/postview">
                  <div className="forward">

                    <button className="button">Enter</button>
                    
                  </div>
              </Link>
                    
                   
          </div>
      </div>
  );
}


