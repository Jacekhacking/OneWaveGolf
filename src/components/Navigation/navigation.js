import React from "react";
import logo from "../UI/Images/OneWave_LOGO_Black.png"
import style from "./navigation.module.css"


const navigation = () => {
    return(

            <div className={`${style['nav-container']} flex gradient-background`}>
                <img className={style['nav-logo']} src={logo} alt="one wave logo"/>
                <ul className={'flex'}>
                    <li className={style['nav-item']}>About</li>
                    <li className={style['nav-item']}>JP Wedges</li>
                </ul>
            </div>


    )
}

export default navigation;