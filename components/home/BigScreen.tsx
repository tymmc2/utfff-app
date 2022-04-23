import React from 'react';
// import './BigScreen.css';
import Container from '../custom/container';
import Button from '../custom/button/Button';
import { StyledText } from '../StyledText';
import { Image, ImageBackground, ScrollView, View } from 'react-native';

const BigScreen = () => {
    return (
        <View>
            <ImageBackground style={{ width: '100%', justifyContent: 'center', zIndex: -1 }} source={require("../../assets/images/tower-alt-dark.png")}>
                <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <StyledText style={{ fontSize: 25, padding: 10, color: 'white' }}>Find free food at UT!</StyledText>
                        <Button title="Search" onPress={null} color="blue" />
                    </View>
                </Container>
            </ImageBackground>
        </View>
    );
};

export default BigScreen;