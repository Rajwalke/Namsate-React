import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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


const Header=()=>{
    return (
        <div className="header" >
            <div>
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard=()=>{
    return(
        <div className="res-card">
            <img className="dish-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ntcsuou2650qimnkrc3m"></img>
            <h3>Raajbagh Restaurant</h3>
            <h4>4.4 <FontAwesomeIcon icon={faStar} style={{color: "#1ef11e",}} /> • 38 minutes</h4>
            <h4>North Indian,South Indian</h4>
            <h4>Andheri(E)</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            {/* search bar */}
            <div className="search-bar">
                <p>search</p>
            </div>
            <div className="res-container">
                {/* restro-card */}
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
            </div>

        </div>
    )
}

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