{/* <div class="parent">
<div class="child">
    <h1>I'm H1 Tag</h1>
</div>
</div> */}
// create using react 
const parent=React.createEleent("div",{id:"parent"},
    [
    React.createElement("div",{id:"child"},
        [
        React.createElement("h1",{},"I'm an h1 Tag"),
        React.createElement("h2",{},"I'm an h2 Tag")
        ]
    ),
    React.createElement("div",{id:"child"},
        [
        React.createElement("h1",{},"I'm an h1 Tag"),
        React.createElement("h2",{},"I'm an h2 Tag")
        ]
    )
    ]
);



const heading=React.createElement("h1",{id:"head"},"Namste React");
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render([heading,parent]);