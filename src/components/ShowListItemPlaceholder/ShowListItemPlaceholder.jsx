import React from 'react';
import { Info, Title, Wrapper } from './ShowListItemPlaceholder.styles';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ShowListItemPlaceholder = ({ index }) => {
    return (
        <Wrapper index={index}>
            <Title />
            <Info />
            {/* <SkeletonPlaceholder borderRadius={4}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
                    <SkeletonPlaceholder.Item marginLeft={20}>
                        <SkeletonPlaceholder.Item width={120} height={20} />
                        <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder> */}
        </Wrapper>
    );
};

export default ShowListItemPlaceholder;
