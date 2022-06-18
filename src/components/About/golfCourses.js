import React, {Fragment} from "react";
import style from "./golfCourses.module.css";
import logo_1 from "../UI/Images/golf logos/mac copy.png";
import logo_2 from "../UI/Images/golf logos/pacific copy.png";
import logo_3 from "../UI/Images/golf logos/preserve copy.png";
import logo_4 from "../UI/Images/golf logos/trails copy.png";
import logo_5 from "../UI/Images/golf logos/sheepranch copy.png";

const golfCourses = () => {
    return (
<Fragment>
    <h2 className={`${style['golf-course-header']} ff-cursive`}>Supported by courses like</h2>

    {/* filler divs for styled underline */}
    <div className='flex'
         style={{justifyContent:'center'}}>
        <div className={'accent-line'}></div>
    </div>
    <div className='flex'
         style={{justifyContent:'center'}}>
        <div className={'accent-box'}></div>
    </div>


    <ul className={style['container']}>
        <li className={style['golf-course-container']}><img className={style['golf-course-img']} src={logo_1} alt=""/></li>
        <li className={style['golf-course-container']}><img className={style['golf-course-img']} src={logo_2} alt=""/></li>
        <li className={style['golf-course-container']}><img className={style['golf-course-img']} src={logo_3} alt=""/></li>
        <li className={style['golf-course-container']}><img className={style['golf-course-img']} src={logo_4} alt=""/></li>
        <li className={style['golf-course-container']}><img className={style['golf-course-img']} src={logo_5} alt=""/></li>
    </ul>

</Fragment>



    )
}

export default golfCourses;