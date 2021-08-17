import React from 'react';
import Header from './Header';
import {Button} from '@customink/pigment-react';

import './styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Button
          onClick={() => {
            window.location.href = 'https://reactjs.org';
          }}
          variant="primary">
          Learn React
        </Button>
      </div>
    </div>
  );
};

export default App;
