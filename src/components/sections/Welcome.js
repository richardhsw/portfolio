import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Welcome = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content center-content">
            <h1 className="welcome-content mt-0 mb-16 reveal-from-bottom">
              <span className="reveal-from-bottom" data-reveal-delay="200">
                Hello, <br />
              </span>
              <span className="reveal-from-bottom" data-reveal-delay="800">
                my name is <span className="text-color-primary">Richard Hsu</span>.
              </span>
            </h1>
            <div className="subheader container-xs">
              <p className="description text-color-low m-0 mb-32 reveal-from-bottom" data-reveal-delay="1400">
                I am a Software Engineer in Southern California with all-round experience in front-end,
                back-end, and machine learning.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="1400">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get in Touch
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Welcome.propTypes = propTypes;
Welcome.defaultProps = defaultProps;

export default Welcome;