import React from "react";
import WedgePic1 from "../../UI/Images/jp-wedges-png.png"
import WedgePic2 from "../../UI/Images/JP-wedge-pic-2.png"
import WedgePic3 from "../../UI/Images/JP-wedge-pic-3.png"

const Wedges = () => {
    return(
        <div id = "Wedges">
            <h2  className={'ff-cursive'} style={{textAlign:'center'}}>JP WEDGES</h2>
            {/* filler divs for styled underline */}
            <div className='flex'
                 style={{justifyContent:'center'}}>
                <div className={'accent-line'}></div>
            </div>
            <div className='flex'
                 style={{justifyContent:'center'}}>
                <div className={'accent-box'}></div>
            </div>


                <p className={'container'}>One Wave Golf is at the forefront of new golf equipment technology. We are partners with JP Golf Co. to sell & spread the future of wedges & golf clubs.

                </p>
            <p style={{textAlign:'center'}}>
                <a  href="https://jpgolf.com/">Shop JP wedges</a>
            </p>
            <div className={'flex wrap'} style={{margin: '1vh',justifyContent:'space-evenly'}}>
                <img
                    src={WedgePic1}
                    style={{

                        maxWidth: "400px",
                        height: "auto",
                        borderRadius:'5px'
                    }}
                    alt="JP wedges with a backdrop of Bandon Oregon"/>
                <img
                    src={WedgePic2}
                    style={{

                        maxWidth: "400px",
                        height: "auto",
                        borderRadius:'5px'
                    }}
                    alt="JP wedges with a backdrop of Bandon Oregon"/>
                <img
                    src={WedgePic3}
                    style={{

                        maxWidth: "400px",
                        height: "auto",
                        borderRadius:'5px'
                    }}
                    alt="JP wedges with a backdrop of Bandon Oregon"/>


            </div>

        </div>
    )
}

export default Wedges;