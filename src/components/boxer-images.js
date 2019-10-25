import React from "react";
import './style.css'

function BoxerImages(props) {
    return (
          <img src={props.src} id={props.id} alt={props.alt}/>
    );
  }
  
  export default BoxerImages;