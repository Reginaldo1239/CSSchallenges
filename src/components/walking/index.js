import React from 'react';
import Center from '../../components/center';
import Style from './style.module.css';
export default function walking(props){
    return(
        <div className={Style.walking}>
            <Center>
                <div className={Style.flor}>
                    <div className={Style.boot}></div>
                    <div className={Style.boot}></div>
                </div>
            </Center>
        </div>
    )
}