import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullStack from './partials/FullStack';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const ProjectsTabs = ({
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
        title: 'Past Projects',
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
                    <div className="text-color-high">
                        <Tabs className="myClass" defaultActiveKey="fullstack">
                            <Tab eventKey="fullstack" title="Full Stack">
                                <FullStack splitClasses={splitClasses} imageFill={imageFill} />
                            </Tab>
                            <Tab eventKey="machinelearning" title="Machine Learning">
                                <FullStack splitClasses={splitClasses} imageFill={imageFill} />
                            </Tab>
                            <Tab eventKey="gamedev" title="Game Dev">
                                <FullStack splitClasses={splitClasses} imageFill={imageFill} />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}

ProjectsTabs.propTypes = propTypes;
ProjectsTabs.defaultProps = defaultProps;

export default ProjectsTabs;