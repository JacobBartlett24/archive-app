
import { useState,useRef } from "react"
import "./AddPlaylistCSS.css"
import Image from "./ImagesClass"
import AddImageForm from "./AddImageForm"
import { cloneDeep, update } from "lodash"

const AddPlaylist = () => {

    
    const [addImageDivList,setAddImageDivList] = useState([]);
    const [tempImageList,setTempImageList] = useState([]);
    const [pendingPlaylist,pendingPlaylistActive] = useState(false);
    const [formPendingPlaylist,formPlaylistActive] = useState(false);
    const [playlistTitle, setPlaylistTitle] = useState('')
    
    const [src,updateSrc] = useState('')
    const [bio,updateBio] = useState('')
    const [image,setImage] = useState(null)

    const alertOnSuccess = () =>{
        alert("Image Added")
    }

    const addPendingPlaylistContainer = () =>{
        pendingPlaylistActive(pendingPlaylist => !pendingPlaylist);
    }

    const addForm = () =>{
        formPlaylistActive(formPendingPlaylist => !formPendingPlaylist)
    }

    const addImage = (e) =>{
        e.currentTarget.classList.add('hidden');
        addForm()
        addPendingPlaylistContainer()
    }

    

    const clearForm = (e) =>{

        let children = e.currentTarget.parentNode.childNodes;

        console.log(children)

        children.forEach(child => {
            if(child.tagName == 'INPUT' || child.tagName == 'TEXTAREA'){
                console.log(child.value)
                child.value = '';
            }
        })
        
            
        

    }

    const addTempImage = (e) =>{
        
        const tempImageBio = cloneDeep(bio)
        
        setTempImageList(tempImageList.concat(
            <div key={tempImageList.length}className="temp-image">
                <img id=""src={src} alt=""></img>
                <p>{tempImageBio}</p>
            </div>
        ))

        clearForm(e);

    }

    const prepImage = (e) =>{
        updateSrc(
            URL.createObjectURL(e.target.files[0])
        )
        /* const reader = new FileReader();

        reader.addEventListener("load", () =>{
            const uploadedImage = reader.result;
            setImage(uploadedImage)
            reader.readAsDataURL(e.files[0]);
        }) */
    }

    return(
        <div className="add-playlist-container">
            <div className="add-playlist-menu">
                <div className="menu-title">Add Playlist</div>
                <form action="" method="get">
                    <div className="form-item">
                        <label htmlFor="PlaylistName">Playlist Name</label>
                        <input type="text"
                                onChange={e => setPlaylistTitle(e.currentTarget.value)} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="Description">Description</label>
                        <textarea type="text" />
                    </div>
                    <div className="form-item">
                        <button type="submit">Post</button>
                        <a href="#" className="add-image" onClick={addImage}>Add Image</a>
                    </div>
                    
                </form>
            <form action="" className={`${formPendingPlaylist ? 'playlist' : 'playlist hidden'}`}>
                    <label htmlFor="imagesrc">Image Source</label>
                       <input className="inputImageSrc"
                              type="file"
                              onChange={prepImage}
                              accept="image/jpeg, image/png, image/jpg"
                              required
                              />
                            
                       <label htmlFor="imagedescription">Image Description</label>
                       <textarea id = "add-image-textarea" 
                                 name="imagedescription"
                                 cols="30" 
                                 rows="10"
                                 onChange={e => updateBio(e.target.value)}
                                 required
                                 />   
                            
                    <a href="#" className="add-image" onClick={addTempImage}>Add Image</a>
            </form>
            </div>
            <div className={`${pendingPlaylist ? "SSSS" :"hidden" }`}> 
                <div className="add-playlist-menu pending-playlist">
                    <div className="menu-title">{playlistTitle}</div>
                    {tempImageList}
                </div>
            </div>
        </div>
    )
}

export default AddPlaylist;