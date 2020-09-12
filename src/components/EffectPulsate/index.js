import React from 'react';
import Style from './style.module.css';
export default function EffectPulsate(){

    return(
        <div>
        <div className={Style.container}>
            <div className={Style.circle}>
                <div className={Style.text}>pulse</div>
                    
            </div>
            <div className={Style.circle2}></div>  
        </div>
        </div>
    )
} 