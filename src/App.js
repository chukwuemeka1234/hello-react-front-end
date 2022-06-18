import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './component/Greetings';
import Header from './component/Header';
import Home from './component/Home';
import './index.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route
        path="/"
        element={(
          <Home />
        )}
      />
      <Route
        path="/greeting"
        element={(
          <Greeting />
        )}
      />
    </Routes>
  </>
);

export default App;
