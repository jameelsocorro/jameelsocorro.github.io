import logo from '../../../assets/img/js-logo-white.png';

const data = {
    navbar: {
        logo,
        title: 'js-ui-kit'
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
    }
};

export default data;
