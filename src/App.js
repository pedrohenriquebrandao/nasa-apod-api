import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Photo from './components/Photo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Route component={Photo} path="/" exact />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
