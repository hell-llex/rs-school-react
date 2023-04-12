import React from 'react';
import '../style/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container" role="loader">
      <svg viewBox="0 0 161 161" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <g className="spiner">
          <path d="M 80.534 9 C 135.603 9 170.02 68.612 142.486 116.303 C 114.952 163.993 46.118 163.993 18.584 116.303 C 12.305 105.428 9 93.092 9 80.534" />
        </g>
      </svg>
    </div>
  );
};

export { Loader };
