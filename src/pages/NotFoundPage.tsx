import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404 Not Found.</h1>
      <p>
        {' '}
        Go <Link to="/">home</Link>
      </p>
    </div>
  );
};

export { NotFoundPage };
