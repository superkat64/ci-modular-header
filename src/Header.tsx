import React from 'react';
import {Logo} from '@customink/pigment-react';

import './styles/header.scss';

const Header = () => {
    return (
        <div className="ndx-InkyHeader_Lg-wrapper">
          <div className="ndx-Menu ndx-InkyHeader_Lg ndx-InkyHeader_Lg--welcome">
            <div className="ndx-MainMenuButton">
              <div className="ndx-MainMenuButton-top-bun" />
              <div className="ndx-MainMenuButton-meat" />
              <div className="ndx-MainMenuButton-bottom-bun" />
              <div className="ndx-MainMenuButton-text">Menu</div>
            </div>
            <div className="ndx-InkyHeader_Lg-main">
              <Logo
                variant={'horizontal'}
                height={'100px'}
                onClick={() => {}}
                className="ndx-Logo"
              />
            </div>
            <div>
              <div className="ndx-InkyHeader_Lg-options">
                <div className="ndx-Ttarp">
                  <div className="ndx-Ttarp-section ndx-Ttarp-talkSection">
                    <div className="ndx-Ttarp-icon" />
                    <div className="ndx-Ttarp-textWrapper">
                      <div className="ndx-Ttarp-text">Talk to a Real Person</div>
                      <div className="ndx-Ttarp-cta">
                        <a href="tel:+18555637465">855-563-7465</a>
                      </div>
                    </div>
                  </div>
                  <div className="ndx-Ttarp-rebrand-section">
                    <div className="ndx-Ttarp-chatContainer">
                      <div className="ndx-TtarpRebrand-icon ndx-Ttarp-icon"></div>
                      <div className="ndx-Ttarp-textWrapper">
                        <span className="ndx-Ttarp-text">Chat with a Real Person</span>
                        <div className="ndx-Ttarp-cta">
                          <a>Chat Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    );  
};

export default Header;
