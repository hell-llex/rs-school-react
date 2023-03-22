import React from 'react';
import { WithRouterProps, withRouter } from './withRouter';

interface LocationProps {
  location: string;
}

type Props = LocationProps & WithRouterProps;

const LocationTitle: React.FC<Props> = () => {
  if (location.pathname === '/') {
    return <span className="page">Home</span>;
  } else if (location.pathname === '/about') {
    return <span className="page">About Us</span>;
  } else {
    return <span className="page">Error 404</span>;
  }
};

const Location = withRouter(LocationTitle);

export default Location;
