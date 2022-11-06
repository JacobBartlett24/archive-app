import { useState } from "react";
import imageSrc from "./Images/PngItem_851857.png";
import newImageSrc from "./Images/depositphotos_25143517-stock-photo-cool-dog.jpg"
import {ReactComponent as ArrowIcon} from './Images/arrow-right-solid.svg'

class Image{
    constructor(src,id){
        this.src = src
        this.id = id
    }
}


function ViewPlaylist(){

    const [currentImage,switchImage] = useState(0);

    const populateImageSlider= () =>{

        let imagePlaylist = []

        for (let i = 0; i < 10; i++){
            let image = new Image();
            if(i%2 === 0){
                image.id = i;
                image.src = imageSrc; 
                imagePlaylist.push(image)    
            }else{
                image.id = i;
                image.src = newImageSrc; 
                imagePlaylist.push(image)    
            }
        }
        return imagePlaylist;
    }

    let imagePlaylist = populateImageSlider();

    const nextImage = (e) =>{

        if(e.currentTarget.id === 'previous' && currentImage !== 0){    
            switchImage(currentImage - 1);
        } else if (e.currentTarget.id === 'next'){
            switchImage(currentImage + 1);
        }
    }

    return(
        <div>
            View Playlist Page
            
            <div id="imageSlider">
                <div id="previousArrow">
                    <a onClick={nextImage} href="#" id="previous"><ArrowIcon /></a>
                </div>
                <div id="currentImage">
                    <img className="image"
                         id={imagePlaylist[currentImage].id}
                         src={imagePlaylist[currentImage].src} alt="" />
                </div>
                <div id="nextArrow">
                    <a id="next" href="#" onClick={nextImage}><ArrowIcon /></a>
                </div>
                <div>{currentImage}</div>
            </div>
        </div>
    );
}



export default ViewPlaylist;