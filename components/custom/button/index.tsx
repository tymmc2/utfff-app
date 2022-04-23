import React from 'react';
import { Button } from 'react-native-paper';
import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';

const fonts = {
    regular: {
        fontFamily: 'Avenir Next',
        fontWeight: '300'
    },
    medium: {
        fontFamily: 'Avenir Next',
        fontWeight: '300'
    },
    light: {
        fontFamily: 'Avenir Next',
        fontWeight: '300'
    },
    thin: {
        fontFamily: 'Avenir Next',
        fontWeight: '300'
    }
};



export default function TextButton(props) {
    const colorScheme = useColorScheme();
    return <Button labelStyle={{fontSize: 18}} theme={{fonts: fonts, colors: { primary: Colors[colorScheme].tint, placeholder: Colors[colorScheme].text, text: Colors[colorScheme].text, background: 'transparent' }}} {...props} />
}