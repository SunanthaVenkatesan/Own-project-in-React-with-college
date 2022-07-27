import React from "react";
import classes from './Card.module.css'

const Card=(props)=>{
    return (
        //As card is a user defined component it will not accept other classes css ,so we are adding like props.classname and we can use our own component just like predefined     
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>

    );
}
export default Card