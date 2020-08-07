import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

export default function FullStack({ splitClasses, imageFill }) {
    return (
        <div className={splitClasses}>

            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        React Native, JavaScript, GitFlow, JSON-Server
                                </div>
                    <h3 className="mt-0 mb-12">
                        Wander
                                </h3>
                    <p className="m-0">
                        Worked with team members using GitFlow and React Native to build an app that allows users to meet and
                        have lunch with new interesting people every week.
                                </p>
                </div>
                <div className={
                    classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                        src={require('./../../../assets/images/features-split-image-01.png')}
                        alt="Features split 01"
                        width={528}
                        height={396} />
                </div>
            </div>

            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        Xcode, Swift, Alamofire, Parse, SwiftyJSON, Spoonacular API
                                </div>
                    <h3 className="mt-0 mb-12">
                        SugoiFridge
                                </h3>
                    <p className="m-0">
                        Developed a Swift application on Xcode that lets users record their groceries, and help suggest possible
                        recipes to make based on available ingredients.
                                </p>
                </div>
                <div className={
                    classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                        src={require('./../../../assets/images/features-split-image-02.png')}
                        alt="Features split 02"
                        width={528}
                        height={396} />
                </div>
            </div>

            <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        Docker, Python, Flask, Google Maps API
                    </div>
                    <h3 className="mt-0 mb-12">
                        Where2Meet
                    </h3>
                    <p className="m-0">
                        Back-end work building and deploying a Python Flask Docker image on AWS that suggests meeting locations
                        based on each person's preferences.
                    </p>
                </div>
                <div className={
                    classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <Image
                        src={require('./../../../assets/images/features-split-image-03.png')}
                        alt="Features split 03"
                        width={528}
                        height={396} />
                </div>
            </div>

        </div>
    );
}