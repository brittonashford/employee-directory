import React from 'react';
import { RiTeamLine } from 'react-icons/ri';

export default function Header() {

    return(
        <header>
            <div className="header-container wrap">
                <h1 className="header-logo"><RiTeamLine id="header-icon"/><span id="header-text">Employee Directory</span></h1>
            </div>         
        </header>

    );
}

