import React from 'react';
import spinner from '../images/spinner.svg';

function Loader() {
  return (
    <div className="loader">
      <img src={spinner} className="loader__spinner" alt="Индикатор загрузки" />
    </div>
  )
}

export default Loader