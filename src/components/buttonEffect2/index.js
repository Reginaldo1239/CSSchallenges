import React from 'react';
import Style from './style.module.css';
export default function ButtonEffect2 (){
    return(
        <div className ={Style.container}>
          <div className={Style.text}>
          <span>passe o mouse no botão</span>
          </div>
              
                <button className={Style.button}>
                  <div className={Style.boxText}>desafio 30 dias</div>  
                    <div className={Style.buttonEffect}> </div>
                 
                   </button>
        </div>
    )
}