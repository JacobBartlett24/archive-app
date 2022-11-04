import { useState } from "react";
import Image from "./Images/PngItem_851857.png";
import {ReactComponent as ArrowIcon} from './Images/arrow-right-solid.svg'

function ViewPlaylist(){

    const [currentImage,switchImage] = useState(0);
    
    const populateImageSlider= () =>{

        let imagePlaylist = []

        for (let i = 0; i < 10; i++){
            imagePlaylist.push(Image)
            console.log(Image)
        }

        console.log(imagePlaylist)
    }

    const nextImage = (e) =>{

        if(e.currentTarget.id === 'previous' && currentImage != 0){    
            switchImage(currentImage - 1);
        } else if (e.currentTarget.id === 'next'){
            switchImage(currentImage + 1);
        }

        
    }
    
    populateImageSlider();

    return(
        <div>
            View Playlist Page
            
            <div id="imageSlider">
                <div id="previousArrow">
                    <a onClick={nextImage} id="previous"><ArrowIcon /></a>
                </div>
                <div id="currentImage">
                    <img className="image" src={Image} alt="" />
                </div>
                <div id="nextArrow">
                    <a id="next" onClick={nextImage}><ArrowIcon /></a>
                </div>
                <div>{currentImage}</div>
            </div>
        </div>
    );
}



export default ViewPlaylist;