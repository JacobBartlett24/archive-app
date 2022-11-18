/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { useState } from 'react';
import './AddPlaylistCSS.css';
import axios from 'axios';
import { cloneDeep } from 'lodash';
import { ReactComponent as XIcon } from './Images/x-solid.svg';

function AddPlaylist() {
  const [tempImageList, setTempImageList] = useState([]);
  const [pendingPlaylist, pendingPlaylistActive] = useState(false);
  const [formPendingPlaylist, formPlaylistActive] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState('');

  const [src, updateSrc] = useState('');
  const [bio, updateBio] = useState('');

  const addPendingPlaylistContainer = () => {
    pendingPlaylistActive((pendingPlaylist) => !pendingPlaylist);
  };

  const addForm = () => {
    formPlaylistActive((formPendingPlaylist) => !formPendingPlaylist);
  };

  const addImage = (e) => {
    e.currentTarget.classList.add('hidden');
    addForm();
    addPendingPlaylistContainer();
  };

  const clearForm = (e) => {
    const children = e.currentTarget.parentNode.childNodes;

    children.forEach((child) => {
      if (child.tagName === 'INPUT' || child.tagName === 'TEXTAREA') {
        child.value = '';
      }
    });
  };

  const addTempImage = (e) => {
    const tempImageBio = cloneDeep(bio);

    if (bio && src) {
      setTempImageList(tempImageList.concat(
        <div key={tempImageList.length} id={tempImageList.length} className="temp-image">
          <img id="" src={src} alt="" />
          <p>{tempImageBio}</p>
          <div onClick={() => setTempImageList(tempImageList.splice(e.id, 1))} className="x"><XIcon /></div>
        </div>,
      ));
    }

    updateBio('');
    updateSrc('');

    clearForm(e);
  };

  const prepImage = (e) => {
    updateSrc(
      URL.createObjectURL(e.target.files[0]),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3002/insert', {
      src: playlistTitle,
    }).then(() => {
      alert('success');
    });
  };

  return (
    <div className="add-playlist-container">
      <div className="add-playlist-menu">
        <div className="menu-title">Add Playlist</div>
        <form action="" method="get" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="PlaylistName">
              Playlist Name
              <input
                type="text"
                onChange={(e) => setPlaylistTitle(e.currentTarget.value)}
                required
              />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="Description">
              Description
              <textarea type="text" />
            </label>
          </div>
          <div className="form-item">
            <button type="submit">Post</button>
            <div type="button" href="#" className="add-image" onClick={addImage}>Add Image</div>
          </div>

        </form>
        <form action="" className={`${formPendingPlaylist ? 'playlist' : 'playlist hidden'}`}>
          <label htmlFor="imagesrc">
            Image Source
            <input
              className="inputImageSrc"
              type="file"
              onChange={prepImage}
              accept="image/jpeg, image/png, image/jpg"
              required
            />
          </label>

          <label htmlFor="imagedescription">
            Image Description
            <textarea
              id="add-image-textarea"
              name="imagedescription"
              cols="30"
              rows="10"
              maxLength={50}
              onChange={(e) => updateBio(e.target.value)}
              required
            />
          </label>

          <div type="button" href="#" className="add-image" onClick={addTempImage}>Add Image</div>
        </form>
      </div>
      <div className={`${pendingPlaylist ? 'SSSS' : 'hidden'}`}>
        <div className="add-playlist-menu pending-playlist">
          <div className="menu-title">{playlistTitle}</div>
          {tempImageList}
        </div>
      </div>
    </div>
  );
}

export default AddPlaylist;
