import {
    faLinkedinIn,
    faInstagram,
    faFacebook,
    faAngellist,
    faGithub
} from '@fortawesome/fontawesome-free-brands';

import logo from '../../../assets/img/js-logo-white.png'
import backgroundImage from '../../../assets/img/background.jpg'

const data = {
    headingSection: {
        buttonTitle: 'Find out more',
        headingTop: 'Design & Code',
        headingBottom: 'You will never win if you never begin',
        logo,
        backgroundImage
    },
    aboutSection: {
        title: 'Little bit about me',
        desc: 'I\'m a passionate web developer with more than 6 years of experience. I\'ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I actively seek out new technologies and stay up-to-date on industry trends and advancements.',
    },
    workItemsSection: [
        {
            title: 'js-ui-kit',
            desc: 'This is my personal css framework that i use in creating my personal projects and for exams.',
            buttonTitle: 'View Website',
            gitHubUrl: 'https://github.com/jameelsocorro/js-ui-kit'
        }
    ],
    footerSection: {
        title: 'Connect with me',
        buttons: [
            {
                url: 'https://www.linkedin.com/in/jameel-socorro-91b8667a/',
                icon: faLinkedinIn
            },
            {
                url: 'https://www.instagram.com/jameelsocorro/',
                icon: faInstagram
            },
            {
                url: 'https://www.facebook.com/jameel.socorro',
                icon: faFacebook
            },
            {
                url: 'https://angel.co/jameel-socorro',
                icon: faAngellist
            },
            {
                url: 'https://github.com/jameelsocorro/js-ui-kit',
                icon: faGithub
            }
        ],
        copyRight: 'Handmade by me © 2018.'
    }
};

export default data;
