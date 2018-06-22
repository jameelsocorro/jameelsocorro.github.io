import styled from 'styled-components';

import {
    tablet,
    desktop,
    desktop2,
    desktop3,
    desktop4
} from 'js-ui-kit/breakpoints';

export const SectionHeader = styled.section`
    padding-bottom: 14rem;
`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: -10rem;

    & .article__icon {
        width: 50px;
    }

    & > div {
        border-bottom: 1px solid #eeeeee;
    }

    //for tablet
    @media (min-width: ${tablet}px) {
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;

        & > div {
            border-bottom: none;
            text-align: center;

            &:nth-child(2) {
                border-right: 1px solid #eeeeee;
                border-left: 1px solid #eeeeee;
            }
        }
    }

    //for desktop2
    @media (min-width: ${desktop2}px) {

        & .article__icon {
            width: 70px;
        }
    }

    //for desktop3
    @media (min-width: ${desktop3}px) {
        & .article__icon {
            width: 90px;
        }
    }

    //for desktop4
    @media (min-width: ${desktop4}px) {
        & .article__icon {
            width: 110px;
        }
    }
`;

export const ArticleItemContainer = styled.div`

    //for tablet
    @media (min-width: ${tablet}px) {
        flex-basis: 0;
        flex-grow: 1;
    }

`;
