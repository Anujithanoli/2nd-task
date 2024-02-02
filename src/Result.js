import React from 'react';
import './Result.css';

const Result = ({ directorName, movieName, onRemoveButtonClick }) => {
  return (
    <div className='man'>
      <input className="first1" type="text" value={directorName} readOnly />
      <input className="first1" type="text" value={movieName} readOnly />
      <button className='but1' onClick={onRemoveButtonClick}>Remove</button>
    </div>
  );
};

export default Result;