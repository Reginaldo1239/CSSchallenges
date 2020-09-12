import React from 'react';
import Style from './style.module.css';
export default function LoaderAnimate(){
    return(
    
    <div className={Style.container}>
        <div className={Style.loaderAnimate}>
            <div className={Style.square}></div>
            <div className={Style.square}></div>
            <div className={Style.square}></div>
           
        </div>
    </div>)
} 