import React from "react";
import logo from "../UI/Images/OneWave_LOGO_Black.png"
import style from "./navigation.module.css"


const navigation = () => {
    return(

            <div className={`${style['nav-container']} flex gradient-background`}>
                <a href="#Home"><img className={style['nav-logo']} src={logo} alt="one wave logo"/></a>
                <ul className={'flex'}>
                    <li className={style['nav-item']}><a href="#About">About</a></li>
                    <li className={style['nav-item']}><a href="#Wedges">JP Wedges</a></li>
                </ul>
            </div>


    )
}

export default navigation;