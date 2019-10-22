import React from "react";
import './style.css'

function BoxerImages(props) {
    return (
        <div className="img-container">
          <img id={props.id} alt={props.name} src={props.image} clicked={props.clicked}/>
        </div>
    );
  }
  
  export default BoxerImages;