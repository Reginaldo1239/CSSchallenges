import React from 'react';
import Style from './style.module.css';
export default function TextEffect(props){
    return(
        <div className={Style.container}>
            <h4>passe o mouse na palavra</h4>
            <div className={Style.boxText}>
                <span>#30diasdecss</span>
            </div>
        </div>
    )
} 