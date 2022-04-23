import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StyledText } from '../StyledText';

const FeedItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <StyledText style={styles.title}>{item.event}</StyledText>
            <StyledText style={styles.content}>{item.date}</StyledText>
            <StyledText style={styles.content}>{item.location}</StyledText>
        </View>
    )
}

export default FeedItem;

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 25,
        margin: 5,
        textAlign: 'center'
    },
    content: {
        fontSize: 18,
        margin: 5
    }
});