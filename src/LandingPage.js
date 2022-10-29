import { useState } from "react";
import { Outlet,Link } from "react-router-dom";


function LandingPage(){

    return(

        <div className="landingPage">
            <h1 className="landingPageTitle">Archive.app</h1>
            <div className="titleAnimation">
            </div>
            <Link to ="/Home"><a href="" className="enterButton">Enter</a></Link>
        </div>
    )
}

export default LandingPage