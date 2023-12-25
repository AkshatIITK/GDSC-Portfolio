// ChristmasWishes.js

import React from 'react';
import '..//wish/wish.css';
import christmastree from '../../assets/christmas-tree.png'

const wish = () => {
    return (
        <section className="christmas-wishes" id="wishes">
            <div className="wishes-container">
                <h2 className="wishes-title">Wishing You a Merry Christmas and a Happy New Year!</h2>
                <p className="wishes-message">May this festive season bring joy, peace, and happiness to you and your loved ones.</p>
                <img src={christmastree} alt="Christmas Tree" className="christmas-tree" />
            </div>
        </section>
    );
}

export default wish;
