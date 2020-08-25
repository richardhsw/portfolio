import React from 'react';
import classNames from 'classnames';

import Image from './Image';

export default function SplitItem({ subtext, title, message, imageSrc, imageFill }) {
  return (
    <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        {subtext}
                    </div>
                    <h3 className="mt-0 mb-12">
                        {title}
                    </h3>
                    <p className="m-0">
                        {message}
                    </p>
                </div>
                <div className={
                    classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                        src={imageSrc}
                        alt={`${title} Picture`}
                        width={528}
                        height={396} />
                </div>
      </div>
  );
};