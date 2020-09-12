import React from 'react';
import Center from '../center';
import Style from './style.module.css';
export default function LoadingWithEffect(props){

    return(
        <div className={Style.LoadingWithEffectComponent}>
            <Center>
                <div className={Style.loadingEffect}>
                    <span>l</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span> 
                </div>
            </Center>
        </div>
    )
}