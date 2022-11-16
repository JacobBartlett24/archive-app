/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import { Header } from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import ViewPlaylist from './ViewPlaylist';
import AddPlaylist from './AddPlaylist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/AddPlaylist"
            element={(
              <>
                <Header />
                <AddPlaylist />
                <Footer />
              </>
)}
          />
          <Route
            path="/Home"
            element={(
              <>
                <Header />
                <Home />
                <Footer />
              </>
)}
          />
          <Route index element={<LandingPage />} />
          <Route
            path="/ViewPlaylist"
            element={(
              <>
                <Header />
                <ViewPlaylist />
                <Footer />
              </>
)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
