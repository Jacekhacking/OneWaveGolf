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
                <p className={'container'}>One Wave Golf is a collaborative golf hub. All things golf, you can find it here.
                    We have an extensive network within the golf world & knowledge about prestigious destinations and can help you book an amazing golf experience for you & your friends/family.
                    You will be in direct contact with us while he helps you decide on the best course for you. <a href="mailto:rustin@onewavegolf.com ">Contact us now to set up your next Golf Experience!</a>

                </p>


            </div>
            <div className={'flex'}
            style={{
                justifyContent:'center'
            }
            }>

                <img className={style['port-pic']} src={RustinPic} alt=""/>



            </div>
            <p className={'container'}>The owner & innovator behind One Wave Golf is Rustin Bonner. He is based in Bandon, Oregon. He has been a Professional Caddy at the #1 golf resort in the world, Bandon Dunes for over 15 years.  Rustin has been around golf all his life.  As a young child, he gravitated towards it. As a high school & college athlete he excelled at it. Now as a caddy, he helps others flow through the game of golf, as well as the game of life.  To golf with Rustin, it is more than just a game. A round of golf with Rustin is an experience of a lifetime
            </p>
            {/*<ul>*/}
            {/*    <li>JP Wedges sold here - click this link to view the shop</li>*/}
            {/*    <li>Recycled Golf textiles - click this link to view the shop & to see which courses are using our products</li>*/}
            {/*    <li>Golf Tours & Experiences</li>*/}
            {/*    <li>Caddy Lessons - learn from the best</li>*/}
            {/*    <li>Golf for Kids - lessons</li>*/}
            {/*    <li>The Chiari Community <a href="https://www.facebook.com/ChiariWarriors/">Learn More</a></li>*/}
            {/*</ul>*/}
            <Wedges/>
            <GolfCourses />

            </Fragment>
    )
}

export default about;