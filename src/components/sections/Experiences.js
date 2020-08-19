import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Experiences = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Work Experiences',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  August 2020 - Present
                </div>
                <h3 className="mt-0 mb-12">
                  Intern <span className="text-color-secondary">@ Auri Online </span>
                </h3>
                <ul className="text-color-high m-0">
                  <li>Implement dynamic color schemes on React website based on subdomain.</li>
                  <li>Designed and developed React Native app using custom functional components.</li>
                  <li>Coordinated with other team members using GitFlow branching model.</li>
                </ul>
              </div>
            </div>

            <div className="split-item">
              <div className="reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  July 2019 – August 2019
                </div>
                <h3 className="mt-0 mb-12">
                  Intern <span className="text-color-secondary">@ Advanced Communication Technology &amp; Solutions </span>
                </h3>
                <ul className="text-color-high m-0">
                  <li>Programmed bash script and packaged dependencies into Docker images to perform offline server deployment.</li>
                  <li>Researched into neural networks, and developed a fullstack web app that trains and infers text from hand-written words.</li>
                  <ul type="circle">
                    <li>Resources utilized include TensorFlow, Flask, HTML, CSS, JavaScript, ELK, MetricBeat.</li>
                  </ul>
                  <li>Trained and taught around 20 coworkers in a workshop on Introduction to AI and Neural Networks.</li>
                </ul>
              </div>
            </div>

            <div className="split-item">
              <div className="reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  March 2018 – June 2019
                </div>
                <h3 className="mt-0 mb-12">
                  Peer Tutor &amp; Reader <span className="text-color-secondary">@ University of California, Irvine</span>
                </h3>
                <ul className="text-color-high m-0">
                  <li>Tutored in-class labs, and graded homework for around 40 students per quarter on “Intermediate Programming in Python”.</li>
                  <li>Topics taught included regular expressions, trees, linked lists, inheritance, and function complexity.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

Experiences.propTypes = propTypes;
Experiences.defaultProps = defaultProps;

export default Experiences;