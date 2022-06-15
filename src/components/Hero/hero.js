import React, {Fragment} from "react";
import style from "./hero.module.css";
// import HeroImg from "../UI/Images/heroImg.JPG"

const hero = () => {
    return (
        <Fragment>


        <div id = "Home" className={`${style['hero-container']} flex gradient-background`}>
            {/*<img className={style['hero-img']} src={HeroImg} alt=""/>*/}

            <div className={`${style['hero-text-container']} flex`}>
                <h2 className={`${style['hero-header']} ff-header ff-cursive`} > OneWaveGolf</h2>
                <p className={'fs-400'} style={{textAlign:'center'}}>Start a Tsunami with OneWave</p>
            </div>
        </div>

        </Fragment>
    )
}


export default hero;