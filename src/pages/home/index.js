import React from 'react';
import Header from '../../components/header';
import Walking from '../../components/walking';
import EffectLightningText from '../../components/effectLightningText';
import EffectPulsate from '../../components/EffectPulsate';
import Center from '../../components/center'
import ButtonEffect2 from '../../components/buttonEffect2';
import LoaderAnimate from '../../components/loaderAnimate'
import ChangeText from '../../components/changeText'
import LoaderWithEffect  from '../../components/loadingWithEffect';
import NewtonPendulum from '../../components/newtonPendulum';
import TextEffect from '../../components/textEffect';
import Loading from '../../components/loading';
import ButtonEffect1 from '../../components/buttonEffect1';

import Style from './style.module.css';

export default function Home(props){
    return(
        <div className={Style.home}>
            <Header></Header>
            <Center>
                <div className={Style.boxComponent}>
                <Walking></Walking>
                </div>
                <div className={Style.boxComponent}>
                <EffectLightningText></EffectLightningText>
                </div>
                <div className={Style.boxComponent}>
                    <NewtonPendulum></NewtonPendulum>
                </div>
                <div className={Style.boxComponent}>
                     <Loading></Loading>
                 </div>
                <div className={Style.boxComponent}>
                <EffectPulsate></EffectPulsate>
                </div>
                <div className={Style.boxComponent}>
                    <ButtonEffect2></ButtonEffect2>
                 </div>
                 <div className={Style.boxComponent}>
                     <LoaderAnimate></LoaderAnimate>
                 </div>
                 <div className={Style.boxComponent}>
                        <ChangeText></ChangeText>
                 </div>
                 <div className={Style.boxComponent}>
                        <LoaderWithEffect></LoaderWithEffect>
                 </div>
                 <div className={Style.boxComponent}>
                        <TextEffect></TextEffect>
                 </div>
                 <div className={Style.boxComponent}>
                        <ButtonEffect1></ButtonEffect1>
                 </div>
            </Center>
        </div>
    )
}