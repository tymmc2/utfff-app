import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Colors from '../../../../constants/Colors';
import useColorScheme from '../../../../hooks/useColorScheme';
import { StyledText } from '../../../StyledText';
import Col from '../../col/Col';
import Row from '../../row/Row';

const GenericCell = (props: { text: string, icon: any, link?: () => null }) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.link ? props.link : () => null}>
            <Row>
                <Col>
                    <Row style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <MaterialIcons size={25} style={{ marginRight: 10 }} name={props.icon} color={Colors[colorScheme].tint} />
                        <StyledText style={{ alignSelf: 'center', fontSize: 20 }}>{props.text}</StyledText>
                        <Col>
                        </Col>
                        <MaterialIcons size={25} name={"chevron-right"} color={Colors[colorScheme].text} />
                    </Row>
                </Col>
            </Row>
        </TouchableOpacity>
    )
}

export default GenericCell;