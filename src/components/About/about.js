import React, {Fragment} from "react";
import style from "./about.module.css";
import RustinPic from "../UI/Images/rustin-pic.jpg";
import GolfCourses from "./golfCourses.js";

const about = () => {
    return (
        <Fragment>

            <h2 className={style['about-header']}>ABOUT  ME!</h2>

            {/* filler divs for styled underline */}
            <div className='flex'
                 style={{justifyContent:'center'}}>
                <div className={'accent-line'}></div>
            </div>
            <div className='flex'
                 style={{justifyContent:'center'}}>
                <div className={'accent-box'}></div>
            </div>



            <div className={`${style['about-container']}`}>
                <p className={'ff-body'}>filler contet balbh
                    wblah blahfiller contet balbh wblah blahfiller contet balbh
                    wblah blahfiller contet balbh wblah blahfiller
                    contet balbh wblah blahfiller contet balbh
                    wblah blahfiller contet balbh  wblah blahfiller contet balbh  wblah blah</p>
                <img className={style['port-pic']} src={RustinPic} alt=""/>
            </div>
            <GolfCourses />

            </Fragment>
    )
}

export default about;