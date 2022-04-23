import React from 'react';
import Row from '../../custom/row/Row';
import Col from '../../custom/col/Col';
import { StyledText } from '../../StyledText';
import { Switch } from 'react-native';

const SettingCell = (props: { name: string, state: boolean, onChange: any }) => {
    return (
        <Row style={{alignItems: 'center'}}>
            <Col style={{flex: 1, paddingLeft: 0}}>
                <StyledText numberOfLines={1} style={{fontSize: 20}}>{props.name}</StyledText>
            </Col>
            <Col auto style={{paddingRight: 0}}>
                <Switch onValueChange={() => props.onChange((previousState: any) => !previousState)} value={props.state} />
            </Col>
        </Row>
    )
}

export default SettingCell;