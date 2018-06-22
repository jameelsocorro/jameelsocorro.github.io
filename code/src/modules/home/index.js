import React, { Component, Fragment } from 'react';

import data from './data';

import {
    IntroContainer,
    IntroAvatarContainer,
    IntroHeading,
    IntroLogo
} from './style';

import {
    Avatar,
    FontHeadline2,
    FontHeadline5,
    FontSubtitle1,
    Hero,
    Hr,
    Page,
} from 'js-ui-kit';

class Home extends Component {

    renderIntroduction() {
        const {
            intro,
            jobTitle,
            headingTop,
            headingBottom,
            logo,
            avatarImage } = data;
        return (
            <IntroContainer>
                <IntroAvatarContainer>
                    <div className='flex flex--center-items p-24'>
                        <Avatar className='mr-16'
                            src={avatarImage} />
                        <div>
                            <FontSubtitle1 fontWeight='200'>{intro}</FontSubtitle1>
                            <FontHeadline5>{jobTitle}</FontHeadline5>
                        </div>
                    </div>
                </IntroAvatarContainer>
                <IntroHeading>
                    <div className='flex flex--column flex--center-items'>
                        <IntroLogo className='mb-16'
                                    src={logo} />
                        <FontHeadline2 fontWeight='200'
                                        textTransform='uppercase'>
                                        {headingTop}
                        </FontHeadline2>
                        <FontHeadline2 fontWeight='500'
                                        textTransform='uppercase'>
                                        <Hr color='#FFF'
                                            height='8'
                                            className='mt-8 mb-8'/>
                                        {headingBottom}
                        </FontHeadline2>
                    </div>
                </IntroHeading>
            </IntroContainer>
        );
    }

    render() {
        const { backgroundImage } = data;
        return (
            <Fragment>
                <Hero fixed
                        height='100'
                        src={backgroundImage} />
                <Page center
                        className='white-text'
                        resolution='1440'
                        height='100'>
                    {this.renderIntroduction()}
                </Page>
            </Fragment>
        );
    }
}

export default Home;
