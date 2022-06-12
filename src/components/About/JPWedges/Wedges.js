import React from "react";

const Wedges = () => {
    return(
        <div id = "Wedges">
            <h2 style={{textAlign:'center'}}>Filler Header</h2>
            {/* filler divs for styled underline */}
            <div className='flex'
                 style={{justifyContent:'center'}}>
                <div className={'accent-line'}></div>
            </div>
            <div className='flex'
                 style={{justifyContent:'center'}}>
                <div className={'accent-box'}></div>
            </div>


            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores beatae, commodi debitis dicta
                dolores esse harum, impedit iure labore maiores placeat porro praesentium quam quidem recusandae
                veritatis voluptas voluptatem.</p>
        </div>
    )
}

export default Wedges;