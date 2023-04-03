import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found router__page">
      <h1>Error 404 Not Found.</h1>
      <p>
        {' '}
        Go <Link to="/">home</Link>
      </p>
    </div>
  );
};

export { NotFoundPage };
