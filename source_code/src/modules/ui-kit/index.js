import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {
    faBars
} from '@fortawesome/fontawesome-free-solid';

import data from './data';

import { PageLayout, SideNav, ColorElement } from "./style";

class UiKitModule extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeSection: 'Colors'
		};

		this.colorSectionRef = React.createRef();
		this.buttonSectionRef = React.createRef();
		this.flexboxSectionRef = React.createRef();
		this.typographySectionRef = React.createRef();
    }

	scrollToAboutSection(sectionName) {

		let ref = this.colorSectionRef;

		switch (sectionName) {
			case 'Colors':
				ref = this.colorSectionRef;
				break;
			case 'Buttons':
				ref = this.buttonSectionRef;
				break;
			case 'Flex-box':
				ref = this.flexboxSectionRef;
				break;
			case 'Typography':
				ref = this.typographySectionRef;
				break;
		}

        const sectionNode = ReactDOM.findDOMNode(ref.current);
		sectionNode.scrollIntoView({ behavior: 'smooth', block: 'start' });
		this.setState({ activeSection: sectionName });
    }

	renderNavbar() {
		const { title } = data.navbar;

		return (
			<nav className="navbar navbar--secondary p-24">
				<div className="navbar__title">{title}</div>
			</nav>
		);
	}

	renderSideNav() {
		return (
			<SideNav className="p-40">
				{
					data.sideNav.map((section, key) => {
						return (
							<li key={key} onClick={() => this.scrollToAboutSection(section)} className={`mb-16 ${ this.state.activeSection == section && 'active' }`}><h6>{section}</h6></li>
						)
					})
				}
			</SideNav>
		);
	}

	renderColorSection() {
		const { title, items } = data.colorSection;

		return (
			<section ref={this.colorSectionRef} className="p-32 pb-16">
				<h3 className="text-uppercase mb-24">{title}</h3>
				<div className="flex flex--column flex--tablet-row">
				{
					items.map((item, key) => {
						return (
							<ColorElement key={key} className={`mr-16 mb-16 p-16 bg-${item.class} ${item.textColor}-text`}>
								{item.class}
							</ColorElement>
						)
					})
				}
				</div>
			</section>
		);
	}

	renderButtonSection() {
		const { title, items } = data.buttonSection;

		return (
			<section ref={this.buttonSectionRef} className="p-32 pb-16">
				<h3 className="text-uppercase mb-32">{title}</h3>
				<h4 className="text-uppercase mb-24">Standard</h4>
				<div className="flex flex--wrap mb-24">
				{
					items.map((item, key) => {
						return (
							<button key={key} className={`mr-16 mb-16 btn btn-${item.class}`}>
								{item.class}
							</button>
						)
					})
				}
				</div>
				<h4 className="text-uppercase mb-16">Icons</h4>
				<div className="flex flex--wrap">
				{
					items.map((item, key) => {
						return (
							<button key={key} className={`mr-16 mb-16 btn btn-icon btn-${item.class}`}>
								<FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
							</button>
						)
					})
				}
				</div>
			</section>
		);
	}

	renderFlexBoxSection() {
		const { title, items } = data.flexBoxSection;

		return (
			<section ref={this.flexboxSectionRef} className="p-32">
				<h3 className="text-uppercase mb-8">{title}</h3>
				{
					items.map((item, key) => {
						return (
							<div key={key} className="pt-16 pb-16">
								<h5 className="mb-8 danger-text">{item.class}</h5>
								<p>{item.desc}</p>
							</div>
						)
					})
				}
			</section>
		);
	}

	renderTypographySection() {
		const { title } = data.typographySection;

		return (
			<section ref={this.typographySectionRef} className="p-32">
				<h3 className="text-uppercase mb-8">{title}</h3>
				<div className="pt-16 pb-16">
					<h1 className="mb-16 danger-text">Heading 1</h1>
					<h2 className="mb-16 danger-text">Heading 2</h2>
					<h3 className="mb-16 danger-text">Heading 3</h3>
					<h4 className="mb-16 danger-text">Heading 4</h4>
					<h5 className="mb-16 danger-text">Heading 5</h5>
					<h6 className="mb-16 danger-text">Heading 6</h6>
					<div className="sub-title1 mb-16 danger-text">Sub Title</div>
					<div className="sub-title2 mb-16 danger-text">Sub Title 2</div>
					<div className="font-body1 mb-16 danger-text">Body 1</div>
					<div className="font-body2 mb-16 danger-text">Body 2</div>
					<div className="font-overline mb-16 danger-text">Overline</div>
					<div className="caption mb-16 danger-text">Caption</div>
				</div>
			</section>
		);
	}

	render() {
		return (
			<Fragment>
				{this.renderNavbar()}
				<PageLayout>
					{this.renderSideNav()}
					<div className="scrollable">
						{this.renderColorSection()}
						{this.renderButtonSection()}
						{this.renderFlexBoxSection()}
						{this.renderTypographySection()}
					</div>
				</PageLayout>
      		</Fragment>
		)
	}

}

export default UiKitModule;
