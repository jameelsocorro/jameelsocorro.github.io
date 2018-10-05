import 'js-ui-kit/assets/sass/core.scss';
import '../assets/fonts/fonts.scss';
import { injectGlobal } from 'styled-components';

import {
    tablet,
    desktop,
    desktop2,
    desktop3,
    desktop4
} from 'js-ui-kit/breakpoints';

injectGlobal`
    #app,
    html {
        font-size: 12px;
        height: 100%;
        width: 100%;

        //for tablet
        @media (min-width: ${tablet}px) {
            font-size: 14px;
        }

        //for desktop
        @media (min-width: ${desktop}px) {
            font-size: 16px;
        }

        //for desktop2
        @media (min-width: ${desktop2}px) {
            font-size: 18px;
        }

        //for desktop3
        @media (min-width: ${desktop3}px) {
            font-size: 24px;
        }

        //for desktop4
        @media (min-width: ${desktop4}px) {
            font-size: 30px;
        }

    }

    body {
        background-color: #FFF;
        font-family: 'AvenirNext', sans-serif;
        font-size: 14px;
        letter-spacing: 0.01rem;
        margin: 0;
        height: 100%;
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    ul {
        margin: 0px;
        padding-left: 16px;
    }

`;
