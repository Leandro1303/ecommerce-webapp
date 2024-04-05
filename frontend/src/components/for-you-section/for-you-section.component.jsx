import React from "react";
import './for-you-section.css';
import ForYouCard from "../for-you-card/for-you-card.component";
import { Carousel } from "react-responsive-carousel";

const ForYouSection = () => {

    return(
    <div>
      <h2>Recommended for you</h2>
      <div className="card-container">
        <Carousel infiniteLoop emulateTouch centerMode >
          <ForYouCard name='Wolf Hat' image='https://i.ibb.co/1f2nWMM/wolf-cap.png'/>
          <ForYouCard name = 'Black Converse' image='https://i.ibb.co/bPmVXyP/black-converse.png'/>
          <ForYouCard name = 'Blue Jean Jacket' image='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'/>
        </Carousel>
      </div>
    </div>
  
  )
}
export default ForYouSection