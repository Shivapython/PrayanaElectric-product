
import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error">404</div>
      <br />
      <br />
      <span className="info">File not found</span>
      <img
        src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
        className="static"
        alt="404-error"
      />
      <div className="home-button">
        <Link to="/">Go To Home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
