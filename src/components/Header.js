import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constanlink";
// import SelectDish from "./SelectDish";

const Header=()=>{
    // let logInOutBtn="Login";
    const [logInOutBtn,setlogInOutBtn]=useState("Login");
    console.log("Header called");

    useEffect(()=>{
        console.log("UseEffect is Called")
    },[])
    return (
        
        

  
        <div className="header" >
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li className="login"  onClick={()=>{
                       if(logInOutBtn==="Login"){
                            setlogInOutBtn("Logout");
                       }
                       else{
                        setlogInOutBtn("Login");
                       }
                    }}>{logInOutBtn}</li>
                </ul>
            </div>
        </div>

    )

}
export default Header;