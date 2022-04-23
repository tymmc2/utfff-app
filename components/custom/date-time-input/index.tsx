import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Col from '../col/Col';
import Row from '../row/Row';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimeInput = (props: { onChange: (e: any, s: any) => void, date: Date, mode?: ("date" | "time") }) => {
    const colorScheme = useColorScheme();
    return (
        <>
            <Row>
                <View style={{ justifyContent: 'center', paddingLeft: 11 }}>
                    <AntDesign name={props.mode ? (props.mode == 'time' ? 'clockcircleo' : 'calendar') : 'calendar'} size={24} color={Colors[colorScheme].tint} />
                </View>
                <Col style={{ paddingLeft: 5}}>
                    <DateTimePicker mode={props.mode ? props.mode : "date"} textColor={Colors[colorScheme].tint} minimumDate={new Date()} value={props.date} onChange={props.onChange} />
                </Col>
            </Row>
            <View style={{ height: 1.35, borderColor: Colors[colorScheme].tint, borderStyle: 'solid', borderWidth: 0.65}} />
        </>
    )
}

export default DateTimeInput;