import React from 'react';
import {AiFillFacebook  } from 'react-icons/ai';
import Style from './style.module.css';
export default function CamadasIconesRedesSociais(){
    return(
        <div>
            <div className={Style.container}>
                <div className={Style.containerIcon}>
            <div className={Style.icon}><AiFillFacebook
            size='3em' color='blue'></AiFillFacebook></div>
             <div className={Style.icon}></div>
            <div className={Style.icon}></div>
            </div>
          </div>
            </div>
    )
}