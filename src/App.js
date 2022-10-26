import Home from "./Home";
import {Header,HeaderItem,DropdownMenu} from "./Header"
import Footer from "./Footer"
import {ReactComponent as SearchIcon} from './Images/magnifying-glass-solid.svg';
import {ReactComponent as UserIcon} from './Images/user-solid.svg';
import {ReactComponent as CaretIcon} from './Images/caret-down-solid.svg';
import LandingPage from "./LandingPage"
//Default Body Styling



function App() {
  
  return (
    <div className="App">
      {/*<Header>
        <HeaderItem icon ={<SearchIcon />}  />  
        <HeaderItem icon ={<UserIcon />}  />  
        <HeaderItem icon ={<CaretIcon />}>
        <DropdownMenu leftIcon={<UserIcon />} rightIcon = {<UserIcon />}/>
        </HeaderItem>  
      </Header>
      <Home />
      <Footer />*/}
      <LandingPage />
    </div>
  );
}

export default App;
