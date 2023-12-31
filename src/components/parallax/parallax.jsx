// Parallax.js

import React, { useEffect } from 'react';
import '../parallax/parallax.scss';

const Parallax = () => {
    return (
        <><div class="bg"></div><div class="parallax">
            <div class="parallax-group">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer fill"></div>
            </div>
            <div class="content">
                <h1>Parallax Scrolling</h1>
                <p>Using only CSS</p>
            </div>
        </div></>


    );
}

export default Parallax;
