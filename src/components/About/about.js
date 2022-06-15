import React, {Fragment} from "react";
import style from "./about.module.css";
import RustinPic from "../UI/Images/rustin-pic.jpg";
import GolfCourses from "./golfCourses.js";
import Wedges from "./JPWedges/Wedges";

const about = () => {
    return (
        <Fragment>



                <h2 id = "About" className={`${style['about-header']} ff-cursive`}>About OneWaveGolf</h2>


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
                <p className={'ff-body'}>One Wave Golf is a collaborative golf hub. All things golf, you can find it here.
                    <ul>
                        <li>JP Wedges sold here - click this link to view the shop</li>
                        <li>Recycled Golf textiles - click this link to view the shop & to see which courses are using our products</li>
                        <li>Golf Tours & Experiences</li>
                        <li>Caddy Lessons - learn from the best</li>
                        <li>Golf for Kids - lessons</li>
                        <li>The Chiari Community - click here to learn more about Chiari Warriors</li>
                    </ul>
                </p>


            </div>
            <div className={'flex'}
            style={{
                justifyContent:'center'
            }
            }>

                <img className={style['port-pic']} src={RustinPic} alt=""/>
            </div>
            <Wedges/>
            <GolfCourses />

            </Fragment>
    )
}

export default about;