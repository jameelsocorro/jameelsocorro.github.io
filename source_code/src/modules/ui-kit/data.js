import logo from '../../../assets/img/js-logo-white.png';

import {
    faLinkedinIn,
    faInstagram,
    faFacebook,
    faAngellist,
    faGithub
} from '@fortawesome/fontawesome-free-brands';

import {
    faAngleUp,
    faAngleDown,
    faAngleRight
} from '@fortawesome/fontawesome-free-solid';

const data = {
    navbar: {
        logo,
        title: 'js-ui-kit'
    },
    buttonSection: {
        title: 'Buttons',
        items: [
            { class: 'primary', icon: faLinkedinIn },
            { class: 'secondary', icon: faInstagram },
            { class: 'info', icon: faFacebook },
            { class: 'success', icon: faAngellist },
            { class: 'warning', icon: faGithub },
            { class: 'danger', icon: faAngleUp },
            { class: 'metal', icon: faAngleDown },
            { class: 'white', icon: faAngleRight }
        ],
    },
    colorSection: {
        title: 'Colors',
        items: [
            { class: 'primary', textColor: 'white' },
            { class: 'secondary', textColor: 'white' },
            { class: 'info', textColor: 'white' },
            { class: 'success', textColor: 'white' },
            { class: 'warning', textColor: 'white' },
            { class: 'danger', textColor: 'white' },
            { class: 'metal', textColor: 'black' }
        ],
    },
    flexBoxSection: {
        title: 'Flex-box',
        items: [
            { class: '.flex', desc: 'Sets the element display to flex.' },
            { class: '.flex--column', desc: 'Make the child elements column.' },
            { class: '.flex--row', desc: 'Make the child elements row.' },
            { class: '.flex--item-start', desc: 'Items are packed toward the start line.' },
            { class: '.flex--item-end', desc: 'Items are packed toward to end line.' },
            { class: '.flex--item-center', desc: 'Items are centered along the line.' },
            { class: '.flex--content-center', desc: 'Items are centered along the line.' },
            { class: '.flex--content-between', desc: 'Items are evenly distributed in the line; first item is on the start line, last item on the end line.' },
            { class: '.flex--center-all', desc: 'Center elements horizontally and vertically.' },
            { class: '.flex--left', desc: 'Make specific element go to the left side.' },
            { class: '.flex--right', desc: 'Make specific element go to the right side.' },
            { class: '.flex--tablet-row', desc: 'Make the element column on mobile then row on tablet.' }
        ],
    },
    typographySection: {
        title: 'Typography'
    }
};

export default data;
