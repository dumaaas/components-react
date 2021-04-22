import React from "react";
import './Image.css';

const Image = (props) => {
    return <img class="cg-logo" width="50px" height="60px" src={props.src} alt=""/>
}

export default Image;