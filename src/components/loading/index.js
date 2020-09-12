import React from 'react';
import Style from './style.module.css';
export default function Loading(props){
    return(
        <div className={Style.container}>
            <div className={Style.circle}>
               
            <div className={Style.semiCircle1}><div className={Style.text}>Loading </div> </div>
            
            <div className={Style.semiCircle2}></div>

            </div>
            </div>
    )
}