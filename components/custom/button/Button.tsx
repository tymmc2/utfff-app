import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { StyledText } from '../../StyledText';

const Button = (props: { title: string, onPress: any, color?: string, style?: StyleProp<ViewStyle> }) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <StyledText style={props.color ? { color: props.color, fontSize: 18 } : { fontSize: 18 }}>{props.title}</StyledText>
        </TouchableOpacity>
    )
}

export default Button;