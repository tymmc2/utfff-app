import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { StyledText } from '../../StyledText';
import Card from '../card/Card';

const DashedButton = (props: { text: string, onPress?: () => void }) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: 'transparent'}} onPress={props.onPress}>
          <Card style={{borderStyle: 'dashed', borderColor: Colors[colorScheme].tint, borderWidth: 2, backgroundColor: Colors[colorScheme].background, shadowColor: 'transparent', elevation: 0}}>
            <StyledText style={{...styles.buttonText, color: Colors[colorScheme].tint, paddingTop: 10, paddingBottom: 10 }}>{props.text}</StyledText>
          </Card>
        </TouchableOpacity>
    )
}

export default DashedButton;

const styles = StyleSheet.create({
    buttonText: {
      fontSize: 20,
      alignSelf: 'center'
    }
  });