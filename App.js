import { Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import FeedScreen from "./FeedScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Feed"
                    component={FeedScreen}
                    options={{ tabBarIcon: makeIconRender("rss-feed"), headerShown: false }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ tabBarIcon: makeIconRender("settings"), headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialIcons name={name} color={color} size={size} />
    );
}
