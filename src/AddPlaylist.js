import { useState } from "react"
import "./AddPlaylistCSS.css"

const AddPlaylist = () => {

    const [imageList,setImageList] = useState([]);

    const alertOnSuccess = () =>{
        alert("Image Added")
    }

    const addImage = (e) =>{
        setImageList(imageList.concat(
            <div className="add-image-form-item">
               <label htmlFor="imagesrc">Image Source</label>
               <input type="text" />
               <label htmlFor="imagedescription">Image Description</label>
               <textarea name="imagedescription" id="" cols="30" rows="10"></textarea>
               <a href="#" onClick={alertOnSuccess}>Add Image</a>
            </div>
        ))

    }

    return(
        <div className="add-playlist-container">
            <div id="add-playlist-menu">
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
                    {imageList}
                </form>
                
            </div>
        </div>
    )
}

export default AddPlaylist;