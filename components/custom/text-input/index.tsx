import React, { forwardRef } from 'react';
import { TextInput } from 'react-native-paper';
import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

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

const getColors = () => {
    const colorScheme = useColorScheme();
    return colorScheme;
}

const TextField = forwardRef((props: import('react-native-paper/lib/typescript/components/TextInput/TextInput').TextInputProps, ref) => <TextInput ref={ref} underlineColor={Colors[getColors()].tint} theme={{fonts: fonts, colors: { primary: Colors[getColors()].tint, placeholder: Colors[getColors()].text, text: Colors[getColors()].text, background: 'transparent' }}} {...props}></TextInput> );

export default TextField;