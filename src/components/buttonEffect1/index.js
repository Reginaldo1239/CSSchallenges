import React from 'react';
import Style from './style.module.css';
export default function Button1(props){

    return(
        <div className={Style.container}>
            <header className={Style.header}>
            <span>passe o mouse no botão</span>
            </header>
            
        <div className={Style.button1}>
                <button className={Style.button} type='button'> 
                <div className={Style.border_animada}></div>
                <div className={Style.border_animada}></div>desafio 30 dias</button>
            </div>
            </div>
    )
}