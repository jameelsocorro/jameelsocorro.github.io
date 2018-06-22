import React, { Component, Fragment } from 'react';

import data from './data';

import {
    WorkThumbnailContainer
} from './style';

import {
    FontHeadline4,
    ImageLink,
    PageContainer,
    Page,
} from 'js-ui-kit';

class Work extends Component {

    renderWorks() {
        const { items } = data;

        return (
            <WorkThumbnailContainer className='pt-16'>
            {
                items.map((item, key) => {
                    return (
                        <ImageLink key={key}
                                    className='p-8'
                                    src={item.image}
                                    url={item.url}>
                        </ImageLink>
                    );
                })
            }
            </WorkThumbnailContainer>
        );
    }

    render() {
        const { title } = data;
        return (
            <Fragment>
                <PageContainer backgroundColor='white'
                                className='pt-32 pb-48 pr-16 pl-16'>
                    <Page center
                            resolution='1440'>
                        <FontHeadline4 className='text-center'>{title}</FontHeadline4>
                        {this.renderWorks()}
                    </Page>
                </PageContainer>
            </Fragment>
        );
    }
}

export default Work;
