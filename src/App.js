import Home from "./Home";
import {Header,HeaderItem,DropdownMenu} from "./Header"
import Footer from "./Footer"
import Profile from "./Profile";
import LandingPage from "./LandingPage"
import { Routes,BrowserRouter,Route } from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Profile" element={<><Header /><Profile /><Footer /></>}/>
          <Route path = "/Home" element ={<><Header /><Home /><Footer /></>}/>
          <Route index element={<LandingPage />} />
                      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
