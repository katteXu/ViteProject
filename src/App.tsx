import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterContainer from './router/index';

function App() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
