import React from 'react';
import SplitItem from '../../elements/SplitItem.js';

export default function FullStack({ splitClasses, imageFill }) {
    return (
        <div className={splitClasses}>

            <SplitItem subtext="Xcode, Swift, Alamofire, Parse, SwiftyJSON, Spoonacular API" title="SugoiFridge" 
                message="Developed a Swift application on Xcode that lets users record their groceries, and help suggest possible
                recipes to make based on available ingredients." imageSrc={require('assets/images/projects/SugoifridgeTriple.png')}
                imageFill={imageFill} />

            <SplitItem subtext="Docker, Python, Flask, Google Maps API" title="Where2Meet" 
                message="Back-end work building and deploying a Python Flask Docker image on AWS that suggests meeting locations
                based on each person's preferences." imageSrc={require('assets/images/projects/Where2Meet.png')} imageFill={imageFill} />

            <SplitItem subtext="Android Studio, Java, AWS, Google Maps API" title="GOTOLockers" 
                message="Android developer for semi-finalist UCI New Venture Competition project. The app allows users to locate 
                and reserve lockers on campus. They can also use the app to lock/unlock lockers." imageSrc={require('assets/images/projects/GOTOLocker.png')}
                imageFill={imageFill} />

            <SplitItem subtext="Android Studio, Java" title="ZotSleep" 
                message="Developed an Android Wear application that suggests to users when to sleep and wake up to feel less groggy during the day.
                It takes into account of the user's daily schedule and sleep cycle to set optimal alarms." 
                imageSrc={require('assets/images/projects/ZotSleep.png')} imageFill={imageFill} />

            <SplitItem subtext="Android Studio, Java, Google Maps API" title="LA Parking" 
                message="Programmed Android app for LAHacks 2018 that utilized LA city's parking lot dataset and GoogleMaps API to 
                help users find nearest and cheapest available parking spots." imageSrc={require('assets/images/projects/LAParking.png')} 
                imageFill={imageFill} />

        </div>
    );
}