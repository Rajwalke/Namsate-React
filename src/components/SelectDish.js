import React from 'react';
import { DISH_LOGO } from '../utils/constanlink';
const SelectDish=({dishdata})=>{
    return (

        <div className="DishesSection">
            
                <img className='dish_img' src={DISH_LOGO + dishdata.imageId}></img>
                {/* <img className="dish_img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/8/09d27322-ce6b-4de3-8e54-2d959186ce8b_PCTilePCTile2.png" alt="dishe_img"></img> */}
                {/* <p className='disp_p'>Pure-Veg</p>  */}
            
        </div>
    )
}

export default SelectDish;