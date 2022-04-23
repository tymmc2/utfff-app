import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SIZE = 80;

const HomeButton = (props: any) => {

    return (
        <View 
            {...props}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: SIZE,
                height: SIZE,
                borderRadius: SIZE / 2,
                borderColor: props.color,
                borderWidth: 0.5,
                backgroundColor: props.backgroundColor,
                zIndex: 100
            }}>
            <AntDesign name="home" size={30} color={props.color} />
        </View>
    );
}

export default HomeButton;