import React from 'react';
import SplitItem from '../../elements/SplitItem.js';

export default function MachineLearning({ splitClasses, imageFill }) {
    return (
        <div className={splitClasses}>

            <SplitItem subtext="Python, Tensorflow, Keras, Pandas" title="Prostate Cancer Detection" 
                message="Developed machine learning pipeline to process raw medical image, identify prostate cancer existence, and display outline.
                Experimented with various neural network architectures including ResNet, GoogleNet, and U-Net with 88.8% validation accuracy from 
                the best architecture." imageSrc={require('assets/images/projects/PCLearning.png')} imageFill={imageFill} />

              <SplitItem subtext="Pytorch, OpenAI Gym, Microsoft Malmo" title="ObstaclesRL" 
                message="Trained a reinforcement learning agent in Minecraft to navigate obstacle courses by jumping over lava and opening doors.
                Experimented with various reinforcement learning algorithms, such as tabular Q, policy gradient, CNN, and DCRN." 
                imageSrc={require('assets/images/projects/lavabob.gif')} imageFill={imageFill} />

              <SplitItem subtext="Python, numpy" title="Visions" 
                message="Worked on various imaging projects ranging from generating panoramas to object detection to face-swapping."
                imageSrc={require('assets/images/projects/FacialDetection.png')} imageFill={imageFill} />

        </div>
    );
}