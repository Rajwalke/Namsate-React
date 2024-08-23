import RestroCard from "./RestroCard";
import restroApi from "../utils/mockdata";
import { useEffect, useState } from "react";
import SelectDish from "./SelectDish";
import ShimmerUI from "./ShimmerUI";


const Body=()=>{
//     const listData=[
//     {
//         "info": {
//         "id": "257428",
//         "name": "Raajbagh Restaurant ",
//         "cloudinaryImageId": "xvyrclhxftulsglktaek",
//         "locality": "Seoni Road",
//         "areaName": "Chhindwara Locality",
//         "costForTwo": "₹150 for two",
//         "cuisines": [
//           "North Indian",
//           "South Indian",
//           "Indian",
//           "Chinese",
//           "Fast Food",
//           "Beverages"
//         ],
//         "avgRating": 3.7,
//         "totalRatingsString": "500+",
//         "sla": {
//           "slaString": "55-60 mins",
//             },
//         }
//     },
//     {
//         "info": {
//         "id": "25765541",
//         "name": "KFC",
//         "cloudinaryImageId": "xvyrclhxftulsglktaek",
//         "locality": "Seoni Road",
//         "areaName": "Chhindwara Locality",
//         "costForTwo": "₹150 for two",
//         "cuisines": [
//           "North Indian",
//           "South Indian",
//           "Indian",
//           "Chinese",
//           "Fast Food",
//           "Beverages"
//         ],
//         "avgRating": 4.7,
//         "totalRatingsString": "500+",
//         "sla": {
//           "slaString": "55-60 mins",
//             },
//         }
//     },
//     {
//         "info": {
//         "id": "257465428",
//         "name": "McD",
//         "cloudinaryImageId": "xvyrclhxftulsglktaek",
//         "locality": "Seoni Road",
//         "areaName": "Chhindwara Locality",
//         "costForTwo": "₹150 for two",
//         "cuisines": [
//           "North Indian",
//           "South Indian",
//           "Indian",
//           "Chinese",
//           "Fast Food",
//           "Beverages"
//         ],
//         "avgRating": 4.2,
//         "totalRatingsString": "500+",
//         "sla": {
//           "slaString": "55-60 mins",
//             },
//         }
//     }
// ]

// locat state varible 
// const [listData2,setlistData2]=useState([    
//     {
//     "info": {
//     "id": "257428",
//     "name": "Raajbagh Restaurant ",
//     "cloudinaryImageId": "xvyrclhxftulsglktaek",
//     "locality": "Seoni Road",
//     "areaName": "Chhindwara Locality",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "North Indian",
//       "South Indian",
//       "Indian",
//       "Chinese",
//       "Fast Food",
//       "Beverages"
//     ],
//     "avgRating": 3.7,
//     "totalRatingsString": "500+",
//     "sla": {
//       "slaString": "55-60 mins",
//         },
//     }
// },
// {
//     "info": {
//     "id": "25765541",
//     "name": "KFC",
//     "cloudinaryImageId": "xvyrclhxftulsglktaek",
//     "locality": "Seoni Road",
//     "areaName": "Chhindwara Locality",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "North Indian",
//       "South Indian",
//       "Indian",
//       "Chinese",
//       "Fast Food",
//       "Beverages"
//     ],
//     "avgRating": 4.7,
//     "totalRatingsString": "500+",
//     "sla": {
//       "slaString": "55-60 mins",
//         },
//     }
// },
// {
//     "info": {
//     "id": "257465428",
//     "name": "McD",
//     "cloudinaryImageId": "xvyrclhxftulsglktaek",
//     "locality": "Seoni Road",
//     "areaName": "Chhindwara Locality",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "North Indian",
//       "South Indian",
//       "Indian",
//       "Chinese",
//       "Fast Food",
//       "Beverages"
//     ],
//     "avgRating": 4.2,
//     "totalRatingsString": "500+",
//     "sla": {
//       "slaString": "55-60 mins",
//         },
//     }
// }]);

// const [allRestro,setallRestro]=useState(copyOfApi);
const [listData2,setlistData2]=useState([]);
const [copyOfApi,setcopyOfApi]=useState([]);
const [dishApi,setdishApi]=useState([]);
const [searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchApiCall();
    },[]);

    const fetchApiCall=async ()=>{
        const apidata=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsconData=await apidata.json();
        console.log(jsconData);
        const restroApiData=jsconData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const dishApiData=jsconData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        console.log("it is an dish api data");
        console.log(dishApiData);
        setdishApi(dishApiData);
        setlistData2(restroApiData);
        setcopyOfApi(restroApiData);
        // console.log(jsconData);

    }
    // console.log(copyOfApi);


    if(listData2.length ===0){
        return(
            <ShimmerUI/>
        )
    }
  
    return (
    <div className="body">
        
            {/* {
                dishApi.map((dishinfo)=>(
                    <SelectDish key={dishinfo.id} dishdata={dishinfo}/>
                ))
            } */}
        

        <div className="Btn">
            
           <div className="search-Btn">
            
            <input className="search-Input" value={searchText} 
            onChange={(input)=>{
                setsearchText(input.target.value);
            }}>    
            </input>
            <button className="BtnSearch" 
            onClick={()=>{
                const filterSearchData=copyOfApi.filter((restroinfodata)=>{
                   return restroinfodata.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                if(filterSearchData.length==0){
                    alert("Not Found !....");
                    setlistData2(copyOfApi);
                    
                }else{
                    setlistData2(filterSearchData);
                }
                {setsearchText("")}
                // if(searchText.length>=1){
                //     
                // }
            }}>
            Search</button>
           </div>
        
            <div className="top-reated">
                <button className="filter-btn" 
                    // onClick={()=>{
                    //     setlistData2(listData2.filter((restroinforating)=>
                    //         restroinforating.info.avgRating>4));
                    // }}
                    onClick={()=>{
                        const filterdata=copyOfApi.filter((restroinfo)=>{
                            return restroinfo.info.avgRating>=4.5;
                        }
                        );
                        setlistData2(filterdata);
                    }
                    
                }
                
                    // another type

                >
                Top Reated Restaurant
                </button>
            </div>

            <div className="All-Restro">
                <button className="filter-btn"
                    onClick={()=>{
                        setlistData2(copyOfApi);
                    }}
                     
                >
                    All-Restaurant
                </button>

            </div>

            <div className="Pure-veg">
                <button className="filter-btn"
                    onClick={()=>{
                        const vegRestro=listData2.filter((restroinfo)=>{
                            return restroinfo.info.badges?.imageBadges?.[0]?.description === "pureveg";
                        });
                        setlistData2(vegRestro);
                        // console.log(copyOfApi[0].info.badges.imageBadges[0].description);
                    }}
                
                >
                Pure-Veg Restaurant
                </button>
            </div>
        </div> 


            <div className="res-container">
              
                {
                  listData2.map((restroinformation)=>(
                    <RestroCard key={restroinformation?.info?.id}restroData={restroinformation}/>
                  ))
                }

                {/* wihtout loop or any map filter  */}
                {/* <RestroCard restroData={restroApi[0]}/>
                <RestroCard restroData={restroApi[1]}/>
                <RestroCard restroData={restroApi[2]}/>
                <RestroCard restroData={restroApi[3]}/>
                <RestroCard restroData={restroApi[4]}/>
                <RestroCard restroData={restroApi[5]}/>
                <RestroCard restroData={restroApi[6]}/>
                <RestroCard restroData={restroApi[7]}/>
                <RestroCard restroData={restroApi[8]}/>
                <RestroCard restroData={restroApi[9]}/> */}
                
                {/* normal */}
                {/* <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/> */}
            </div>

        </div>

    )

}
export default Body;