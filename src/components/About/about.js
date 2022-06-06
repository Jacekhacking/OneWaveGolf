import React, {Fragment} from "react";
import style from "./about.module.css";
import rustinpic from "../UI/Images/rustin-pic.jpg";
import GolfCourses from "./golfCourses.js";

const about = () => {
    return (
        <Fragment>

            <h2 className={style['about-header']}>ABOUT  ME!</h2>
            <div className={`${style['about-container']}`}>
                <p className={'ff-body'}>filler contet balbh
                    wblah blahfiller contet balbh wblah blahfiller contet balbh
                    wblah blahfiller contet balbh wblah blahfiller
                    contet balbh wblah blahfiller contet balbh
                    wblah blahfiller contet balbh  wblah blahfiller contet balbh  wblah blah</p>
                <img className={style['port-pic']} src={rustinpic} alt=""/>
            </div>
            <GolfCourses />

            </Fragment>
    )
}

export default about;