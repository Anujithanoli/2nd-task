import React, { useState } from 'react';
import Fun from './Fun';
import Result from './Result';
import Header from './Header';

const App = () => {
  const [directorName, setDirectorName] = useState('');
  const [movieName, setMovieName] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAddButtonClick = () => {
    setShowResult(true);
  };

  const handleRemoveButtonClick = () => {
    setShowResult(false);

  };

  return (
    <>
    <div><Header/></div>
      <Fun
        directorName={directorName}
        setDirectorName={setDirectorName}
        movieName={movieName}
        setMovieName={setMovieName}
        onAddButtonClick={handleAddButtonClick}
      />
      {showResult && (
        <Result
          directorName={directorName}
          movieName={movieName}
          onRemoveButtonClick={handleRemoveButtonClick}
        />
      )}
    </>
  );
};

export default App;