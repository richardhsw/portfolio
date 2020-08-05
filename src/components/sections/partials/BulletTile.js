import React from 'react';

export default function BulletTile({ delay, message }) {
    return (
        <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
            <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                    <p className="m-0 text-sm">
                        <span className="text-color-primary">•</span> {message}
                    </p>
                </div>
            </div>
        </div>
    );
}
