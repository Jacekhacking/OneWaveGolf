import React from "react";
import style from "./hero.module.css";
import filler from "../UI/Images/filler-image.jpeg"

const hero = () => {
    return (
        <div className={`${style['hero-container']} flex gradient-background`}>
            <img className={style['hero-img']} src={filler} alt=""/>

            <div className={`${style['hero-text-container']} flex`}>
                <h2 className={`${style['hero-header']} ff-header`} > OneWaveGolf</h2>
                    <p className={'fs-400'} style={{textAlign:'center'}}>Start a Tsunami with OneWave</p>
            </div>
        </div>
    )
}


export default hero;