import React from 'react';
import './App.css';
import Posts from './components/Posts';

const App = (props) => {
  return (
    <div className="App">
      <h1 className='header__app'>Posts</h1>
      <Posts />
    </div>
  );
};

export default App;
