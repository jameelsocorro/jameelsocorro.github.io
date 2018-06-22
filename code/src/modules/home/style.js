import styled from 'styled-components';

import {
    tablet,
    desktop,
    desktop2,
    desktop3,
    desktop4
} from 'js-ui-kit/breakpoints';

export const IntroContainer = styled.div`
    height: 100%;
`;

export const IntroLogo = styled.img`
    background: url(${props => props.src}) center no-repeat;
    background-size: cover;
    height: 80px;
    width: 80px;

    //for desktop2
    @media (min-width: ${desktop2}px) {
        min-height: 120px;
        min-width: 120px;
    }

    //for desktop3
    @media (min-width: ${desktop3}px) {
        min-height: 160px;
        min-width: 160px;
    }

    //for desktop4
    @media (min-width: ${desktop4}px) {
        min-height: 200px;
        min-width: 200px;
    }
`;

export const IntroAvatarContainer = styled.div`
    position: absolute;
    width: 100%;
`;

export const IntroHeading = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
`;
