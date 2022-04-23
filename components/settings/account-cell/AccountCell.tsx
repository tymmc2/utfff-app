import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Row from '../../custom/row/Row';
import Col from '../../custom/col/Col';
import { useSelector } from 'react-redux';
import { StyledText } from '../../StyledText';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Card from '../../custom/card/Card';
import { firebase } from '@react-native-firebase/auth';

const AccountCell = ( props: { navigation: any }) => {
    const [name, setName] = useState('');
    const colorScheme = useColorScheme();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('UserProfiles').doc(user.uid).get().then(doc => {
                    setName(doc.data().displayName);
                })
            } else {
                setName('');
            }
        })
    }, []);

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate('AccountSettings')}>
            <Card style={{ margin: 0, padding: 10 }}>
            <Row style={{alignItems: 'center', paddingTop: 0, paddingBottom: 0}}>
                <Col auto style={{paddingRight: 0, paddingLeft: 0}}>
                    <View style={{...styles.icon, backgroundColor: Colors[colorScheme].tint}}><StyledText style={styles.iconText}>{name ? name.substring(0,1).toUpperCase() : null}</StyledText></View>
                </Col>
                <Col style={{flex: 1}}>
                    <StyledText numberOfLines={1} style={styles.lead}>{name}</StyledText>
                    <StyledText numberOfLines={1} style={styles.subtitle}>LonghornRides User</StyledText>
                </Col>
                <Col auto style={{paddingRight: 0}}>
                    <AntDesign name="right" size={24} color={'#BEBBB8'} />
                </Col>
            </Row>
            </Card>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    icon: {
        borderRadius: 20,
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    iconText: {
        fontSize: 22,
        color: 'white',
    },
    lead: {
        fontSize: 20,
        marginBottom: 5
    },
    subtitle: {
        color: '#BEBBB8'
    }
});

export default AccountCell;