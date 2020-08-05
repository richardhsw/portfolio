import React from 'react';
import Image from '../../elements/Image';

export default function LogoTile({ imageSrc, title, delay }) {
    return (
        <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
            <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                        <Image
                            src={imageSrc}
                            alt={"Features tile " + title + " icon"}
                            width={64}
                            height={64} />
                    </div>
                </div>
                <div className="features-tiles-item-content">
                    <p className="m-0 text-color-high text-base">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
}
