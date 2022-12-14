/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import imageSrc from './Images/PngItem_851857.png';
import newImageSrc from './Images/depositphotos_25143517-stock-photo-cool-dog.jpg';
import { ReactComponent as ArrowIcon } from './Images/arrow-right-solid.svg';
import Image from './ImagesClass';

function ViewPlaylist() {
  const [currentImage, switchImage] = useState(0);

  const populateImageSlider = () => {
    const imagePlaylist = [];

    for (let i = 0; i < 10; i += 1) {
      const image = new Image();
      if (i % 2 === 0) {
        image.id = i;
        image.src = imageSrc;
        imagePlaylist.push(image);
      } else {
        image.id = i;
        image.src = newImageSrc;
        imagePlaylist.push(image);
      }
    }
    return imagePlaylist;
  };

  const imagePlaylist = populateImageSlider();

  const nextImage = (e) => {
    if (e.currentTarget.id === 'previous') {
      switchImage(currentImage - 1);
    } else if (e.currentTarget.id === 'next') {
      switchImage(currentImage + 1);
    }
  };

  return (
    <div>
      <div id="imageSlider">
        <div id="previousArrow" className={`${currentImage === 0 ? 'hidden' : ''} `}>
          <div onClick={nextImage} onKeyUp={nextImage} role="menuitem" tabIndex="-1" id="previous"><ArrowIcon /></div>
        </div>
        <div id="currentImage">
          <img
            className="image"
            id={imagePlaylist[currentImage].id}
            src={imagePlaylist[currentImage].src}
            alt=""
          />
        </div>
        <div id="nextArrow" className={`${currentImage === imagePlaylist.length - 1 ? 'hidden' : ''}`}>
          <div onKeyUp={nextImage} role="menuitem" tabIndex="0" id="next" href="#" onClick={nextImage}><ArrowIcon /></div>
        </div>
      </div>
    </div>
  );
}

export default ViewPlaylist;
