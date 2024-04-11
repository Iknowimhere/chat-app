// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Chats from './pages/Chats.jsx';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={HomePage} exact />
      <Route path='/chats' component={Chats} />
    </div>
  );
}

export default App;
