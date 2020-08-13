import React from 'react';
// import SplitItem from '../../elements/SplitItem.js';

export default function GameDev({ splitClasses, imageFill }) {
    return (
        <div className={splitClasses}>

          <div className="split-item">
                <div className="center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                    </div>
                    <h3 className="mt-0 mb-12">
                    </h3>
                    <p className="m-0">
                      This area is currently under construction, please check back again later :)
                    </p>
                </div>
          </div>

        </div>
    );
}