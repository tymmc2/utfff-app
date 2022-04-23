import React from 'react';
import { ActivityIndicator, Dialog, Portal } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme.web';
import Col from '../col/Col';
import Row from '../row/Row';

const Loader = (props: any) => {
    const colorScheme = useColorScheme();
    const colors = {
        primary: Colors[colorScheme].tint,
        secondary: Colors[colorScheme].tint
    };
    return (
        <Portal>
            <Dialog dismissable={false} {...props} style={{width: 125, alignSelf: 'center', borderRadius: 15}}>
                <Col style={{alignContent: 'center', alignSelf: 'center', padding: 25}}>
                    <Row style={{alignItems: 'center', alignSelf: 'center'}}>
                        <ActivityIndicator size={40} style={{alignSelf: 'center'}} theme={{colors: colors}} />
                    </Row>
                </Col>
            </Dialog>
        </Portal>
    )
}

export default Loader;