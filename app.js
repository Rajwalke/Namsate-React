import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";

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
const recElement=(
    <h1>Be Stronger</h1>
);
const NameUser=()=>(
    <div className="NameUser">
        <h1>Hello Raj Walke Welcome to the Course</h1>
    </div>
)
const number =1000;
// component composion 
const Heading=()=>{
    return (
        <div className="Container">
                    <NameUser/>
                    <p>{number}</p>
                    {500+300}
                    
            <h1> Namste React using JSX 🚀</h1>

            {/* react element inside react component */}
           <p>{recElement}</p> 
            
        </div>

    )
};

const hello=(
    <div className="ok">
        <h2>Recat component inside the React Element</h2>
        
        {/* <Heading/> */}
        {/* <Heading></Heading> */}
        {Heading()};
    </div>
)
// const Heading2=()=> (
//     <div>
//             <h1>Namste React</h1>
//     </div>

// );
const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Heading/>);
root.render(hello)
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