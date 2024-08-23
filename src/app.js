import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import SelectDish from "./components/SelectDish";
import { jsx } from "react/jsx-runtime";




// AppLayout 
// Header
//      -logo
//      -nabvar
//          -home
//          -about
//          -cart 
// body
//  -restro container
//      -restrocard
//          -image
//          -Name of restro,image of dish
//          -star rating
//          -restro info
//          -delivary time
//          
// footer
//  -contact,address,copyright,scoail media


// const restroApi={
//         "info": {
//             "id": "257428",
//             "name": "Raajbagh Restaurant ",
//             "cloudinaryImageId": "xvyrclhxftulsglktaek",
//             "locality": "Seoni Road",
//             "areaName": "Chhindwara Locality",
//             "costForTwo": "₹150 for two",
//             "cuisines": [
//               "North Indian",
//               "South Indian",
//               "Indian",
//               "Chinese",
//               "Fast Food",
//               "Beverages"
//             ],
//             "avgRating": 3.7,
//             "veg": true,
//             "parentId": "164019",
//             "avgRatingString": "3.7",
//             "totalRatingsString": "500+",
//             "sla": {
//               "deliveryTime": 59,
//               "lastMileTravel": 10.8,
//               "serviceability": "SERVICEABLE",
//               "slaString": "55-60 mins",
//               "lastMileTravelString": "10.8 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2024-08-07 22:30:00",
//               "opened": true
//             },
//             "badges": {
//               "imageBadges": [
//                 {
//                   "imageId": "v1695133679/badges/Pure_Veg111.png",
//                   "description": "pureveg"
//                 }
//               ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "imageBased": {
//                   "badgeObject": [
//                     {
//                       "attributes": {
//                         "description": "pureveg",
//                         "imageId": "v1695133679/badges/Pure_Veg111.png"
//                       }
//                     }
//                   ]
//                 },
//                 "textBased": {
                  
//                 },
//                 "textExtendedBadges": {
                  
//                 }
//               }
//             },
//             "aggregatedDiscountInfoV3": {
//               "header": "60% OFF",
//               "subHeader": "UPTO ₹110"
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {
                  
//                 },
//                 "video": {
                  
//                 }
//               }
//             },
//             "reviewsSummary": {
              
//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {
              
//             },
//             "externalRatings": {
//               "aggregatedRating": {
//                 "rating": "--"
//               }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//           },
//           "analytics": {
            
//           },
//           "cta": {
//             "link": "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
//             "type": "WEBLINK"
//           }
// }







const Footer=()=>{
    return (
        <div className="">

        </div>

    )
}
const AppLayout=()=>{
    return (
        <div className="mainApp">
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
};




const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout/>);














































// episode 1,2,3
// React.createElement=>Object=>HTMLElement(render);
// jsx
// jsx-is not html inside javascript
// jsx is html like syntax 

// React Element
// const jsxHeading=(
//     <h1 id="heading" className="heading">
//         Namste React using JSX 🚀
//     </h1>
//     );
    
// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeading);

// React Component
// const recElement=(
//     <h1>Be Stronger</h1>
// );
// const NameUser=()=>(
//     <div className="NameUser">
//         <h1>Hello Raj Walke Welcome to the Course</h1>
//     </div>
// )
// const number =1000;
// // component composion 
// const Heading=()=>{
//     return (
//         <div className="Container">
//                     <NameUser/>
//                     <p>{number}</p>
//                     {500+300}
                    
//             <h1> Namste React using JSX 🚀</h1>

//             {/* react element inside react component */}
//            <p>{recElement}</p> 
            
//         </div>

//     )
// };

// const hello=(
//     <div className="ok">
//         <h2>Recat component inside the React Element</h2>
        
//         {/* <Heading/> */}
//         {/* <Heading></Heading> */}
//         {Heading()};
//     </div>
// )
// const Heading2=()=> (
//     <div>
//             <h1>Namste React</h1>
//     </div>

// );
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Heading/>);
// root.render(hello)
{/* <div class="parent">
<div class="child">
    <h1>I'm H1 Tag</h1>
</div>
</div> */}
// create using react 
// const parent=React.createElement("div",{id:"parent"},
//     [
//     React.createElement("div",{id:"child"},
//         [
//         React.createElement("h1",{},"I'm an h1 Tag "),
//         React.createElement("h2",{},"I'm an h2 Tag")
//         ]
//     ),
//     React.createElement("div",{id:"child"},
//         [
//         React.createElement("h1",{},"I'm an h1 Tag"),
//         React.createElement("h2",{},"I'm an h2 Tag")
//         ]
//     )
//     ]
// );



// const heading=React.createElement("h1",{id:"head"},"Namste React");
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render([heading,parent]);