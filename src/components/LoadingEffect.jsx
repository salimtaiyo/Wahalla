import React from 'react';
import '../css/index.css';

const LoadingEffect = () => {
    return (
        <div className="loading">
       
            <h1 className="loading__header">
            <span>W</span>
            <span>A</span>
            <span>H</span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            <span>A</span>
            </h1>

            <div className="wahalla-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
       
    );
};

export default LoadingEffect;
