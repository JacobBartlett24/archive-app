/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

function LandingPage() {
  return (

    <div className="landingPage">
      <h1 className="landingPageTitle">Archive.app</h1>
      <div className="titleAnimation" />
      <Link to="/Home"><div type="button" href="" className="enterButton">Enter</div></Link>
    </div>
  );
}

export default LandingPage;
