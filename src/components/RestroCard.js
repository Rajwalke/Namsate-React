import { CDN_URL_RESTRO } from "../utils/constanlink";

const RestroCard=({restroData})=>{
    const {name,costForTwo,avgRating,cuisines,areaName}=restroData?.info
      return(
          <div className="res-card">
              <img className="dish-img" src={CDN_URL_RESTRO + restroData.info.cloudinaryImageId}></img>
              <h3>{name}</h3>
              <h4>{costForTwo}</h4>
              <h4>{avgRating}  •{restroData.info.sla.slaString}</h4>
              <div className="cusiArray">
              <h4 className="cuisines">{cuisines.join(",")}</h4>
              </div>
              
              <h4>{areaName}</h4>
          </div>
      )
  }
  export default RestroCard;