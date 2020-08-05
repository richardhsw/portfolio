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
      className={outerClasses} id="experiences"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  July 2019 – August 2019
                </div>
                <h3 className="mt-0 mb-12">
                  Intern <span className="text-color-secondary">@ Advanced Communication Technology & Solutions </span>
                </h3>
                <p className="m-0">
                  • Programmed bash script and packaged dependencies into Docker images to perform offline server deployment. <br />
                  • Researched into neural networks, and developed a fullstack web app that trains and infers text from hand-written words. <br />
                  &emsp; &#9702; Resources utilized include TensorFlow, Flask, HTML, CSS, JavaScript, ELK, MetricBeat. <br />
                  • Trained and taught around 20 coworkers in a workshop on Introduction to AI and Neural Networks.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div className="center-content-mobile reveal-from-leftZ" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  March 2018 – June 2019
                </div>
                <h3 className="mt-0 mb-12">
                  Peer Tutor & Reader <span className="text-color-secondary">@ University of California, Irvine</span>
                </h3>
                <p className="m-0">
                  • Tutored in-class labs, and graded homework for around 40 students per quarter on “Intermediate Programming in Python”. <br />
                  • Topics taught included regular expressions, trees, linked lists, inheritance, and function complexity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Experiences.propTypes = propTypes;
Experiences.defaultProps = defaultProps;

export default Experiences;