import React from 'react';
import './App.css';
import Header from './components/js/Header';
import Sidebar from './components/js/Sidebar';
import Feed from './components/js/Feed';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
