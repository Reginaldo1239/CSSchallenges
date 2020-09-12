import React from 'react';
import Style from './style.module.css';
export default function NewtonPendulum(){
    return(
        <div className ={Style.container}>
            <h4>newton Pendulum</h4>
            <div className={Style.newtonPendulum}>
                <div className={Style.lineHorizontal}>

                <div className={Style.lineVertical}><div className={Style.circle}></div></div>
                <div className={Style.lineVertical}><div className={Style.circle}></div></div>
                <div className={Style.lineVertical}><div className={Style.circle}></div></div>
                <div className={Style.lineVertical}><div className={Style.circle}></div></div>
                <div className={Style.lineVertical}><div className={Style.circle}></div></div>
               
              
                </div>

            </div> 
        </div>
    )
}  