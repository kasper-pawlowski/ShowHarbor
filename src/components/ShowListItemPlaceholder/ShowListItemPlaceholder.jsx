import React from 'react';
import { Info, Title, Wrapper } from './ShowListItemPlaceholder.styles';

const ShowListItemPlaceholder = ({ index }) => {
    return (
        <Wrapper index={index}>
            <Title />
            <Info />
        </Wrapper>
    );
};

export default ShowListItemPlaceholder;
