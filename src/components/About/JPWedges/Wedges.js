import React from "react";

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
                <a href="https://jpgolf.com/">Shop JP wedges</a> </p>
        </div>
    )
}

export default Wedges;