import React from 'react';
import { View, ViewStyle } from 'react-native';

const Container = (props: { children?: any, style?: ViewStyle }) => (
    <View style={{ padding: 10, ...props.style }}>
        {props.children}
    </View>
);

export default Container;