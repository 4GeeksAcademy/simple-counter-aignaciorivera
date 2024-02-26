//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Timer from "./component/Timer.jsx";
 
let setCounter = 0
function counterRender ( ) {
setCounter = setCounter + 1
    ReactDOM.render(<Timer seconds={setCounter}/>, document.querySelector("#app"));

}

setInterval(counterRender, 1000) 
    

//render your react application
