
import { useState } from "react"
import "./AddPlaylistCSS.css"
import Image from "./ImagesClass"



const AddPlaylist = () => {

    const [addImageDivList,setAddImageDivList] = useState([]);
    const [tempImageList,setTempImageList] = useState([]);
    const [pendingPlaylist,pendingPlaylistActive] = useState(false);
    const [currentImageSrc, setCurrentImageSrc] = useState('')
    const [currentImageBio, setCurrentImageBio] = useState('')

    const handleImageSrcChange = e =>{
        setCurrentImageSrc(e.target.value);
        console.log(currentImageSrc)
    }

    const handleImageBioChange = e =>{
        setCurrentImageBio(e.target.value);
        
        
    }

    const alertOnSuccess = () =>{
        alert("Image Added")
    }

    const addTempImage = () =>{
        
        setTempImageList(tempImageList.concat(
        <div key={tempImageList.length}>
            <h3>{currentImageSrc}</h3>
            <p>{currentImageBio}</p>
        </div>
        ));
        console.log(addImageDivList)
        
    }

    const refreshAddImageForm = (e) =>{
        let input = e.currentTarget.parentNode.querySelector('input');
        let textarea = e.currentTarget.parentNode.querySelector('textarea');
        /*
        let image = new Image();
        let db = new DatabaseFunctions();
        image.src = input.value
        image.addBio(textarea.value)
        db.addImageDB(image)
        */
        input.value = "";
        textarea.value = "";
    }

    const addPendingPlaylistContainer = () =>{
        pendingPlaylistActive(pendingPlaylist => !pendingPlaylist);
    }

    const addImage = (e) =>{
        setAddImageDivList(addImageDivList.concat(
            <div key={addImageDivList.length} className="add-image-form-item">
               <label htmlFor="imagesrc">Image Source</label>
               <input className="inputImageSrc"
                      type="text"
                       onChange={handleImageSrcChange} 
                       />
               <label htmlFor="imagedescription">Image Description</label>
               <textarea id = "add-image-textarea" 
                         name="imagedescription"
                         cols="30" 
                         rows="10"
                         onChange={e => setCurrentImageBio(e.target.value)}
                         >

                         </textarea>
               <a href="#" onClick={addTempImage} className="add-image">Add Image</a>
            </div>
        ))
        
        e.currentTarget.classList.add("hidden")
        addPendingPlaylistContainer()
    }

    return(
        <div className="add-playlist-container">
            <div className="add-playlist-menu">
                <div className="menu-title">Add Playlist</div>
                <form action="" method="get">
                    <div className="form-item">
                        <label htmlFor="PlaylistName">Playlist Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="Description">Description</label>
                        <textarea type="text" />
                    </div>
                    <div className="form-item">
                        <button type="submit">Post</button>
                        <a href="#" className="add-image" onClick={addImage}>Add Image</a>
                    </div>
                    {addImageDivList}
                </form>

            </div>
            <div className={`${pendingPlaylist ? "SSSS" :"hidden" }`}>
                <div className="add-playlist-menu pending-playlist">
                    <div className="menu-title">Current Playlist</div>
                    {tempImageList}
                </div>
            </div>
        </div>
    )
}

export default AddPlaylist;