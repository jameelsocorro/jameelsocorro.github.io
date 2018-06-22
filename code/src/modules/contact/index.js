import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import data from './data';

import {
    ContactContainer,
    ContactForm,
    ContactFormButton,
    ContactLogo,
    FooterButton
} from './style';

import {
    ButtonLink,
    FontBody1,
    FontBody2,
    FontHeadline4,
    Page
} from 'js-ui-kit';

class Contact extends Component {

    renderContactForm() {
        const { title, desc, button } = data.contactForm;
        return (
            <Page center
                    resolution='1440'
                    backgroundColor='transparent'>
                <ContactForm className='p-32 bg-midnight white-text shadow-2'>
                    <FontHeadline4>{title}</FontHeadline4>
                    <FontBody1 fontWeight='300'
                                className='text-center pt-8'>
                        {desc}
                    </FontBody1>
                    <ContactFormButton rounded
                                        textColor='#FFC107'
                                        className='pr-16 pl-16 pt-8 pb-8 amber-text'
                                        href={button.url}>
                        {button.title}
                    </ContactFormButton>
                </ContactForm>
            </Page>
        );
    }

    renderContactButtons() {
        const { buttons } = data;
        return (
            <div className='flex p-16 mt-32'>
                {
                    buttons.map((button, key) => {
                        return (
                            <FooterButton key={key}
                                        className='pr-16 pl-16 secondary-text'
                                        fontSize='1.5rem'>
                                <FontAwesomeIcon icon={button.icon}></FontAwesomeIcon>
                            </FooterButton>
                        )
                    })
                }
            </div>
        );
    }

    render() {
        const { copyRight } = data;
        return (
            <ContactContainer className='bg-primary-light pt-24 pr-24 pl-24 pb-16'>
                {this.renderContactForm()}
                <div className='flex flex--column flex--center-items'>
                    {this.renderContactButtons()}
                    <FontBody2 className='text-center mb-8'>{copyRight}</FontBody2>
                </div>
            </ContactContainer>
        );
    }
}

export default Contact;
