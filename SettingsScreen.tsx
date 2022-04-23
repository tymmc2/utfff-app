import { ScrollView, View } from "react-native";
import WebView from "react-native-webview";
import GenericCell from "./components/custom/cells/generic-cell/GenericCell";
import Container from "./components/custom/container";
import { Header } from "./components/custom/nav/Header";
import InteractCell from "./components/settings/interact-cell/InteractCell";
import SettingCell from "./components/settings/setting-cell/SettingCell";
import SettingGroup from "./components/settings/setting-group/SettingGroup";
import { StyledText } from "./components/StyledText";
import Colors from "./constants/Colors";
import useColorScheme from "./hooks/useColorScheme";

const SettingsScreen = (props: { navigation: any }) => {
    const colorScheme = useColorScheme();

    const openWindow = (url) => {

    }

    return (
        <>
            <View>
                <View style={{ position: 'relative', backgroundColor: Colors[colorScheme].background, opacity: 0.01, height: 45, width: '100%' }} />
            </View>
            <ScrollView>
                <Header text="Settings" />
                <Container>
                    <View>
                        <SettingGroup title="Settings">
                            <SettingCell name="Notifications" state={false} />
                        </SettingGroup>
                        <SettingGroup title="Extra resources">
                            <InteractCell text="UT Output" onPress={null} />
                            <InteractCell text="Social Work Food Pantry" onPress={null} />
                        </SettingGroup>
                    </View>
                </Container>
            </ScrollView>
        </>
    )
}

// const UTOutpostView = () => {
//     return <WebView source={{ uri: "https://deanofstudents.utexas.edu/emergency/utoutpost.php" }} />;
// }

export default SettingsScreen;