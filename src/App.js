import Home from "./Home";
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components";

//Default Body Styling

document.body.style.margin = 0;
document.body.style.fontFamily = 'IBM Plex Mono, monospace';
document.body.style.background = '#343434'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
