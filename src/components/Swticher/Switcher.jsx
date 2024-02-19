import { useDimensions } from '@/context/DimensionsContext';
import { Button, Container, SwitcherWrapper, Wrapper, ButtonText, Indicator, IndicatorWrapper } from './Switcher.styles';
import { useEffect, useState } from 'react';
import { FadeIn, FadeOut, useSharedValue, withSpring } from 'react-native-reanimated';

const Switcher = ({ route }) => {
    const { setSwitcherDimensions } = useDimensions();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setActiveTab(0);
    }, [route]);

    const tabs = ['All', 'Movies', 'TV Shows'];

    const layoutHandler = (event) => {
        const { height } = event.nativeEvent.layout;
        setSwitcherDimensions({
            height: height,
        });
    };

    const left = useSharedValue(0);

    useEffect(() => {
        left.value = withSpring(`${activeTab * 33.33}%`, {
            duration: 500,
            dampingRatio: 1,
            stiffness: 100,
        });
    }, [activeTab]);

    return (
        <Container onLayout={layoutHandler} entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
            <SwitcherWrapper>
                <Wrapper intensity={0} tint="dark" experimentalBlurMethod="dimezisBlurView">
                    {tabs.map((tab, i) => (
                        <Button key={i} onPress={() => setActiveTab(i)} index={i} activeTab={activeTab}>
                            <ButtonText index={i} activeTab={activeTab}>
                                {tab}
                            </ButtonText>
                        </Button>
                    ))}
                    <IndicatorWrapper style={{ left }}>
                        <Indicator />
                    </IndicatorWrapper>
                </Wrapper>
            </SwitcherWrapper>
        </Container>
    );
};

export default Switcher;
