import 'js-ui-kit/assets/sass/main.scss';
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
        height: 100%;
        width: 100%;
    }

    body {
        background-color: #FFF;
        height: 100%;
        width: 100%;
    }

    ul {
        padding-left: 16px;
    }

`;
