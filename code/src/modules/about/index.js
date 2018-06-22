import React, { Component, Fragment } from 'react';

import data from './data';

import {
    ArticleContainer,
    ArticleItemContainer,
    SectionHeader
} from './style';

import {
    FontBody1,
    FontBody2,
    FontHeadline4,
    FontHeadline5,
    FontHeadline6,
    PageContainer,
    Page,
} from 'js-ui-kit';

class About extends Component {

    renderToolItems(tool, key) {
        return (
            <Fragment key={key}>
                <FontHeadline6 key={key} className='mb-8 mt-24'>{tool.title}</FontHeadline6>
                {
                    tool.items.map((item, itemKey) => {
                        return <FontBody1 key={itemKey}>{item}</FontBody1>
                    })
                }
            </Fragment>
        );
    }

    renderArticle(article) {
        const { image, title, desc, tools } = article;
        return (
            <ArticleItemContainer className='flex flex--column flex--center-items bg-white pt-40 pb-40 pr-24 pl-24'>
                <img className='article__icon' src={image} alt="" />
                <FontHeadline5 className='mt-16 mb-16'>{title}</FontHeadline5>
                <FontBody1 className='text-center'>{desc}</FontBody1>
                {tools.map(this.renderToolItems)}
            </ArticleItemContainer>
        );
    }

    render() {
        const { title, intro, articleUx, articleFrontend, articleBackend } = data;
        return (
            <Fragment>
                <PageContainer backgroundColor='white' className='pb-16'>
                    <SectionHeader className='bg-primary-light pt-48 pb-48 pr-24 pl-24'>
                        <Page center
                                resolution='1440'>
                            <FontHeadline4 className='text-center mb-16'>{title}</FontHeadline4>
                            <FontBody1 className='text-justify'>{intro}</FontBody1>
                        </Page>
                    </SectionHeader>
                    <Page center
                            resolution='1440'
                            backgroundColor='transparent'
                            className='pr-24 pl-24'>
                        <ArticleContainer className='shadow-2'>
                            {this.renderArticle(articleUx)}
                            {this.renderArticle(articleFrontend)}
                            {this.renderArticle(articleBackend)}
                        </ArticleContainer>
                    </Page>
                </PageContainer>
            </Fragment>
        );
    }
}

export default About;
