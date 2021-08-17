import React from 'react';
import {Logo} from '@customink/pigment-react';

const Header = () => {
    return (
        <header className="App-header">
        <Logo
          variant={'inky'}
          height={'100px'}
          onClick={() => {}}
          className="App-logo"
        />
      </header>
    );  
};

export default Header;
