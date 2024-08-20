import { Button, Image, ScrollView, StatusBar, Text, View } from "react-native";
const imageIcon = require("./assets/logo.png");
export default function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 20 }}>
      <StatusBar backgroundColor="#00b0b5" barStyle="light-content"></StatusBar>
        <Image source={imageIcon} alt="image" />
      <ScrollView>
        <Text>Hellow</Text>
      </ScrollView>
    </View>
  );
}
