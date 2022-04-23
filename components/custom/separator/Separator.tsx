import React from 'react';
import { StyleProp, StyleSheet, View as V } from 'react-native';
import { View } from '../../Themed';

const Separator = (props: { style?: any}) => {
    return <View style={{...styles.separator, ...props.style}} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />;
}

export default Separator;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    height: 1,
    marginHorizontal: 5
  },
});