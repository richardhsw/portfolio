import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import LogoTile from './partials/LogoTile';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const SkillsTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Skills'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <LogoTile imageSrc={require('assets/images/logos/python.svg')} title="Python" />
            <LogoTile imageSrc={require('assets/images/logos/java.svg')} title="Java" delay="200" />
            <LogoTile imageSrc={require('assets/images/logos/csharp.svg')} title="C#" delay="300" />
            <LogoTile imageSrc={require('assets/images/logos/cpp.svg')} title="C++" delay="400" />
            <LogoTile imageSrc={require('assets/images/logos/react.svg')} title="React Native" delay="500" />
            <LogoTile imageSrc={require('assets/images/logos/react.svg')} title="React" delay="600" />
            <LogoTile imageSrc={require('assets/images/logos/javascript.svg')} title="JavaScript" delay="700" />
            <LogoTile imageSrc={require('assets/images/logos/html.svg')} title="HTML" delay="800" />
            <LogoTile imageSrc={require('assets/images/logos/css.svg')} title="CSS" delay="900" />
            <LogoTile imageSrc={require('assets/images/logos/swift.svg')} title="Swift" delay="1000" />
            <LogoTile imageSrc={require('assets/images/logos/visualbasic.svg')} title="VisualBasic" delay="1100" />
            <LogoTile imageSrc={require('assets/images/logos/tux.svg')} title="Unix" delay="1200" />
            <LogoTile imageSrc={require('assets/images/logos/mysql.svg')} title="MySQL" delay="1300" />

          </div>
        </div>
      </div>
    </section>
  );
}

SkillsTiles.propTypes = propTypes;
SkillsTiles.defaultProps = defaultProps;

export default SkillsTiles;