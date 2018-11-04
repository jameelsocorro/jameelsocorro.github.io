import React, { Component, Fragment } from 'react';

import data from './data';

import { Page } from 'js-ui-kit';

class Home extends Component {

    render() {

        const {
            buttonTitle,
            backgroundImage,
            headingTop,
            headingBottom,
            logo } = data;

        return (
            <Fragment>
                <div className="hero hero--slice-bottom-right"
                    style={{
                        backgroundImage: `linear-gradient(to right bottom, rgba(34, 230, 255, 0.84), rgba(0, 120, 136, 0.84)),
                                            url(${backgroundImage})`
                    }}>
                </div>
                <Page center
                        className='white-text'
                        resolution='1440'
                        height='100'>
                    <div className="h-100">
                        <div className='flex flex--item-center p-64'>
                            <img className='hero-logo' alt="" src={logo} />
                        </div>
                        <div className="flex flex--content-center mt-120">
                            <div className='flex flex--column flex--item-center'>
                                <h2 className="text-uppercase mb-16 fw-regular">{headingTop}</h2>
                                <h5 className="mb-32 fw-light">{headingBottom}</h5>
                                <a href="#" className="btn btn-white">{buttonTitle}</a>
                            </div>
                        </div >
                    </div>
                </Page>
            </Fragment>
        );
    }
}

export default Home;
