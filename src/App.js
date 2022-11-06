import Home from "./Home";
import {Header,HeaderItem,DropdownMenu} from "./Header"
import Footer from "./Footer"
import Profile from "./Profile";
import LandingPage from "./LandingPage"
import { Routes,BrowserRouter,Route } from "react-router-dom";
import ViewPlaylist from "./ViewPlaylist";
import AddPlaylist from "./AddPlaylist";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/AddPlaylist" element={<><Header /><AddPlaylist /><Footer /></>} />
          <Route path = "/Home" element ={<><Header /><Home /><Footer /></>}/>
          <Route index element={<LandingPage />} />
          <Route path = "/ViewPlaylist" element={<><Header /><ViewPlaylist/><Footer /></>}></Route>            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
