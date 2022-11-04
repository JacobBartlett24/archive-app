import { useState } from "react";
import Image from "./Images/PngItem_851857.png";

function ViewPlaylist(){

    const [currentImage,switchImage] = useState(Image);
    
    const populateImageSlider= () =>{

        let imagePlaylist = []

        for (let i = 0; i < 10; i++){
            imagePlaylist.push(Image)
            console.log(Image)
        }

        console.log(imagePlaylist)
    }

    populateImageSlider();
    

    return(
        <div>
            View Playlist Page
            
            <div id="imageSlider">
                <div id="previousImage">
                    <img src="" alt="" />
                </div>
                <div id="currentImage">
                    <img src="" alt="" />
                </div>
                <div id="nextImage">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}



export default ViewPlaylist;