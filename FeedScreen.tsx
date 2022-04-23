import { ScrollView, View } from "react-native";
import { Header } from "./components/custom/nav/Header";
import FeedItem from "./components/feed/FeedItem";
import { StyledText } from "./components/StyledText";
import Colors from "./constants/Colors";
import useColorScheme from "./hooks/useColorScheme";

const FeedScreen = () => {
    const colorScheme = useColorScheme();
    const jsonFile = require('./data.json');

    return (
        <>
            <View>
                <View style={{ position: 'relative', backgroundColor: Colors[colorScheme].background, opacity: 0.01, height: 45, width: '100%' }} />
            </View>
            <ScrollView>
                <Header text="Feed" />
                <StyledText style={{ fontSize: 25, textAlign: 'center' }}>This month's free food</StyledText>
                {jsonFile.map(item => (
                    <FeedItem item={item} />
                ))}
            </ScrollView>
        </>
    );
};

export default FeedScreen;