import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/fontawesome-free-brands';

import { FooterLink } from "./style";

import data from './data';

import { Page } from 'js-ui-kit';

class Home extends Component {

    constructor(props) {
        super(props);
        this.aboutSectionRef = React.createRef();
    }

    scrollToAboutSection(e) {
        const aboutSectionNode = ReactDOM.findDOMNode(this.aboutSectionRef.current);
        aboutSectionNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    renderHeadingSection() {
        const {
            buttonTitle,
            backgroundImage,
            headingTop,
            headingBottom,
            logo } = data.headingSection;

        return (
            <Fragment>
                <div className="hero"
                    style={{
                        backgroundImage: `linear-gradient(to right bottom, rgba(34, 230, 255, 0.84), rgba(0, 120, 136, 0.84)),
                                                    url(${backgroundImage})`
                    }}>
                </div>
                <div className='section-center white-text' style={{ height: '84%' }}>
                    <div className="h-100">
                        <div className='flex flex--item-center p-64'>
                            <img className='hero-logo' alt="" src={logo} />
                        </div>
                        <div className="flex flex--content-center mt-120">
                            <div className='flex flex--column flex--item-center'>
                                <h2 className="text-uppercase mb-16 fw-regular">{headingTop}</h2>
                                <h5 className="mb-32 fw-light">{headingBottom}</h5>
                                <button onClick={this.scrollToAboutSection.bind(this)} className="btn btn-white">{buttonTitle}</button>
                            </div>
                        </div >
                    </div>
                </div>
            </Fragment>
        );
    }

    renderAboutSection() {
        const {
            title,
            desc } = data.aboutSection;

        return (
            <section ref={this.aboutSectionRef} className="diagonal-section bg-metal">
                <div className="section-center pr-40 pl-40 text-center">
                    <h3 className="mb-32">{title}</h3>
                    <p className="text-justify">{desc}</p>
                </div>
            </section>
        );
    }

    renderWorkItems() {
        return data.workItemsSection.map((m, key) => {
            return (
                <section key={key} className="diagonal-section">
                    <div className="section-center pr-40 pl-40 text-center">
                        <h3 className="mb-32">{m.title}</h3>
                        <p className="text-center mb-32">{m.desc}</p>
                        <div className="flex flex--center-all">
                            {
                                m.gitHubUrl &&
                                <a href={m.gitHubUrl}
                                    style={{ marginLeft: '-7rem' }}
                                    target="_blank"
                                    className="btn btn-white btn-icon mr-32">
                                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                </a>
                            }
                            <Link to="/js-ui-kit" className="btn btn-white">{m.buttonTitle}</Link>
                        </div>
                    </div>
                </section>
            )
        });
    }

    renderFooter() {
        const { title, copyRight, buttons } = data.footerSection;
        return (
            <section className="section-center p-40 text-center white-text">
                <h5 className="mb-16 text-uppercase">{title}</h5>
                <div>
                    {
                        buttons.map((link, key) => {
                            return <FooterLink key={key} href={link.url} target="_blank" className={`btn-link white-text ${ key != (buttons.length - 1) ? 'mr-32' : '' }`}><FontAwesomeIcon icon={link.icon}></FontAwesomeIcon></FooterLink>
                        })
                    }
                </div>
                <div className="mt-16">{copyRight}</div>
            </section>
        );
    }

    render() {
        return (
            <Fragment>
                {this.renderHeadingSection()}
                {this.renderAboutSection()}
                {this.renderWorkItems()}
                {this.renderFooter()}
            </Fragment>
        );
    }
}

export default Home;
