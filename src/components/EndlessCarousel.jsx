// EndlessCarousel.jsx

import React from 'react';
import './EndlessCarousel.css';

function EndlessCarousel({ items }) {
    return (
        <div className="endless-carousel">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    {index === items.length - 1 && items.map((item, innerIndex) => (
                        <React.Fragment key={innerIndex}>
                            {item}
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default EndlessCarousel;
