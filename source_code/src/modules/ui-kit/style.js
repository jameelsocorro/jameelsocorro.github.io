import styled from 'styled-components';

export const PageLayout = styled.div`
    display: flex;
    height: calc(100% - 5rem);
    overflow: hidden;

    @media (min-width: 840px) {

    }
`;

export const SideNav = styled.ul`
    border-right: 1px solid #f0f0f0;
    cursor: pointer;
    list-style: none;
    margin: 0;

    > li {
        color: #424242;
        text-transform: uppercase;

        > h6 {
            font-weight: 400;
        }

        &.active {
            color: #00BCD4;

            > h6 {
                font-weight: 500;
            }
        }
    }
`;

export const ColorElement = styled.div`
    text-align: center;

    @media (min-width: 480px) {
        width: 8rem;
    }
`;
