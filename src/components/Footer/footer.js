import React from "react";
import style from "./footer.module.css";
import twitter from "../UI/Images/socials png/twitter.png"
import instagram from "../UI/Images/socials png/instagram.png"

const footer = () => {
    return (
        <footer>

            <div >
                <div className={`${style['footer-social-media-container']} fs-300`}>
                    <div> Connect with us on social media</div>
                    <div className={'flex'}>
                        <img className={style['socials-image']} src={twitter} alt="twitter"/>
                        <img className={style['socials-image']} src={instagram} alt="instagram"/>
                    </div>
                </div>

                <section className={`${style['footer-copyright-container']} fs-300 flex`}
                > @copyright 2021 <section style={{color:'grey'}}>| Multipurpose Company |</section> </section>
            </div>

        </footer>
    )
}

export default footer;
