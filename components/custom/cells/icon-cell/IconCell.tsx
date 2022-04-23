import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import Colors from '../../../../constants/Colors';
import useColorScheme from '../../../../hooks/useColorScheme';
import { StyledText } from '../../../StyledText';
import Col from '../../col/Col';
import Row from '../../row/Row';

const IconCell = (props: {text: string, icon: any, link?: string}) => {
    const colorScheme = useColorScheme();
    return (
        <Row>
            <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <AntDesign size={20} style={{marginRight: 10}} name={props.icon} color={Colors[colorScheme].tint} />
                    <StyledText style={{alignSelf: 'center', fontSize: 20}}>{props.text}</StyledText>
                </Row>
            </Col>
      </Row>
    )
}

export default IconCell;