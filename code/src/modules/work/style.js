import styled from 'styled-components';

import { tablet, desktop } from 'js-ui-kit/breakpoints';

export const WorkThumbnailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 8rem;

    //for tablet
    @media (min-width: ${tablet}px) {
        align-items: flex-start;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 5rem;
    }
`;
