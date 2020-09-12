import React from 'react';
import Style from './style.module.css';
export default function ChangeText(){
    return(
        <div className={Style.container}>
            <div className={Style.text}>
                <span>Eu amo</span> 
                <span></span>
            </div>
        </div>
    )
}