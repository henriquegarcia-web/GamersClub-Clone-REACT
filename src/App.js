import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Header from './components/Header/Header'

import { HeaderMenus } from './data/HeaderMenus'

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header data={HeaderMenus} />
    </Router>
  );
}

export default App;