/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from './Images/PngItem_851857.png';

const HomeStyle = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    justify-items: center;
    margin: 3rem 0 3rem 0;
`;

const ImagePlaylistContainers = styled.div`
    display: flex;
    flex-direction: column;
    
    
`;

const ImagePlaylist = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    padding: 1rem;
    background-color: #111111;
    margin: 2rem 0;
    border-radius: 15px;
    padding: 0 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Images = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    div{
       height: 250px;
       width: 200px;
       border: 1px solid white;
       color: white;
       margin: 10px; 
    }
    img{
        height:250px;
        width: 200px;
    }
`;

function Home() {
  return (

    <HomeStyle>

      <ImagePlaylistContainers>
        <h2 style={{ margin: 0 }}>Playlist</h2>
        <ImagePlaylist>
          <Link to="/ViewPlaylist">
            <div className="playlistTitle">View Playlist</div>
          </Link>
          <Images>
            <div>
              <img src={Image} alt="" />
            </div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
          </Images>
        </ImagePlaylist>
        <h2 style={{ margin: 0 }}>Playlist</h2>
        <ImagePlaylist>
          <Images>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
          </Images>
        </ImagePlaylist>
        <h2 style={{ margin: 0 }}>Playlist</h2>
        <ImagePlaylist>
          <Images>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
            <div>Content</div>
          </Images>
        </ImagePlaylist>
      </ImagePlaylistContainers>

    </HomeStyle>

  );
}

export default Home;
