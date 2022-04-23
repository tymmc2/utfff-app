import React from 'react';
import { View } from 'react-native';
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';
import TextButton from '../button';
import { StyledText } from '../../StyledText';
import { clearAlerts } from '../../../redux/actions/alert';

const Alert = (props: { title: String, body?: String, hideAlert: () => void, visible: boolean, multiple?: boolean, onSubmit?: () => void }) => {
    const colorScheme = useColorScheme();
    // const dispatch = useDispatch();
    return (
        <View>
            <Portal>
                <Dialog style={{borderRadius: 15, backgroundColor: Colors[colorScheme].secondaryBackground}} visible={props.visible} onDismiss={props.hideAlert}>
                    <Dialog.Title><StyledText>{props.title}</StyledText></Dialog.Title>
                    {props.body ? 
                    <Dialog.Content>
                        <StyledText>{props.body}</StyledText>
                    </Dialog.Content>
                    :
                    null
                    }
                    <Dialog.Actions style={{ width: '100%' }}>
                        {props.multiple ? <View style={{ marginRight: 'auto'}}>
                            <TextButton onPress={() => { props.hideAlert(); /* dispatch(clearAlerts()); */  }}>No</TextButton>
                        </View> : null}
                        <View>
                            <TextButton onPress={() => { props.multiple && props.onSubmit ? props.onSubmit() : props.hideAlert(); /* dispatch(clearAlerts()); */  }}>{props.multiple ? 'Yes' : 'Ok'}</TextButton>
                        </View>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default Alert;