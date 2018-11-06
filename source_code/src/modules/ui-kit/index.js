import React, { Component, Fragment } from 'react';

import data from './data';

class UiKitModule extends Component {

	renderNavbar() {
		const { title } = data.navbar;

		return (
			<nav className="navbar navbar--secondary p-24">
				<div className="navbar__title">{title}</div>
			</nav>
		);
	}

	renderFlexBoxSection() {
		const { title, items } = data.flexBoxSection;

		return (
			<section className="p-32">
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

	render() {
		return (
			<Fragment>
				{this.renderNavbar()}
				{this.renderFlexBoxSection()}
      		</Fragment>
		)
	}

}

export default UiKitModule;
