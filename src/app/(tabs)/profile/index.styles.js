import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const StyledText = styled(Text)`
    ${(props) => props.theme.text};
    font-size: 40px;
`;
