import Home from "./Home";
import {Header,HeaderItem,DropdownMenu} from "./Header"
import Footer from "./Footer"
import {ReactComponent as SearchIcon} from './Images/magnifying-glass-solid.svg';
import {ReactComponent as UserIcon} from './Images/user-solid.svg';
import {ReactComponent as CaretIcon} from './Images/caret-down-solid.svg';
import LandingPage from "./LandingPage"
import { Routes,BrowserRouter,Route } from "react-router-dom";



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/*<Header>
            <HeaderItem icon ={<SearchIcon />}  />
            <HeaderItem icon ={<UserIcon />}  />
            <HeaderItem icon ={<CaretIcon />}>
            <DropdownMenu leftIcon={<UserIcon />} rightIcon = {<UserIcon />}/>
            </HeaderItem>
        </Header>
          
  <Footer />*/}
          <Route path = "/Home" element ={<><Header /><Home /><Footer /></>}/>
          <Route index element={<LandingPage />} />
                      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
