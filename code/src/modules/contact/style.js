import styled from 'styled-components';
import { ButtonLink } from 'js-ui-kit';
import { tablet, desktop } from 'js-ui-kit/breakpoints';

export const ContactContainer = styled.footer`

`;

export const ContactForm = styled.aside`
    align-items: center;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin-top: -10rem;
    position: relative;

    //for tablet
    @media (min-width: ${tablet}px) {
        flex-direction: row;
        margin-top: -7rem;

        & > div {
            flex-basis: 0;
            flex-grow: 1;
            text-align: left;
        }
    }
`;

export const ContactFormButton = styled(ButtonLink)`
    margin-top: 2.01rem;

    //for tablet
    @media (min-width: ${tablet}px) {
        margin-top: 0px;
        margin-left: 2.01rem;
    }
`;

export const ContactLogo = styled.img`
    height: 30px;
    width: 30px;
`;

export const FooterButton = styled(ButtonLink)`
    transition: all 0.3s cubic-bezier(0,.01,.98,.5);

    &:hover {
        transform: translateY(-0.3rem);
    }
`;
