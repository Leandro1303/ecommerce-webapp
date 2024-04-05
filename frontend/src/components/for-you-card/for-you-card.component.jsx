import React from "react";
import './for-you-card.css'

const ForYouCard = (props) => {
  return(
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={props.image} />
      </div>
      <p>{props.name}</p>
    </div>
  )
}

export default ForYouCard