import { useState } from "react";
import { Link } from "react-router-dom";

function Profile(){
    return(
        <div className="profilePage">
            <div id="profile">
                <div id="profilePictureContainer">
                    <div id="profilePicture">

                    </div>
                </div>
                <div id="profileInformation">
                    <h4>Username: </h4>
                    <h4>Description:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis doloremque ratione aut temporibus, asperiores quaerat perspiciatis saepe pariatur et dolorem doloribus ullam corrupti aliquid accusantium sed suscipit dolor rerum.</p></h4>
                    
                </div>
            </div>
            <div id="something">

            </div>
            
        </div>
    )
}

export default Profile