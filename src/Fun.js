import React from 'react';
import './Fun.css';

const Fun = ({
  directorName,
  setDirectorName,
  movieName,
  setMovieName,
  onAddButtonClick,
}) => {
  return (
    <div className='ma'>
      <input
        className="first"
        type="text"
        placeholder='Director Name'
        value={directorName}
        onChange={(e) => setDirectorName(e.target.value)}
      />
      <input
        className="first"
        type="text"
        placeholder='Movie Name'
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button className='but' onClick={onAddButtonClick}>Add</button>
    </div>
  );
};

export default Fun;