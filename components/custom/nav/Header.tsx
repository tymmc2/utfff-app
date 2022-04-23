import React from 'react';
import { View } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { Text } from '../../Themed';
import Separator from '../separator/Separator';

export const Header = (props: { text: string }) => {
    const colorScheme = useColorScheme();

    return (
        <View>
            {/* <LinearGradient colors={[Colors[colorScheme].tint, Colors[colorScheme].background, Colors[colorScheme].background ]} style={{ height: 100 }} /> */}
            <Text style={{ fontSize: 40, margin: 15, marginTop: 25, marginBottom: 0, color: Colors[colorScheme].tint }}>{props.text}</Text>
            <Separator />
        </View>
    )
}