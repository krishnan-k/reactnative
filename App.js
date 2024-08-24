  import { useState } from "react";

import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "./component/Carousel";
import StackNavigation from "./navigation/StackNavigation";

const imageIcon = require("./assets/logo.png");
const greenCard = require("./assets/greencard.png");
export default function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    // <View style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
    //   <StatusBar backgroundColor="#00b0b5" barStyle="light-content"></StatusBar>
    //   <Image source={imageIcon} alt="logo" />
    //   <ScrollView>
    //     <Text>pantaloon react native application</Text>
    //     <Button style={style.button} title="click here" onPress={() => setVisible(true)} />
    //     <Button title="alert box" onPress={() => Alert.alert('Invalid data', 'valid data', [
    //       {
    //         "text": 'cancel',
    //         onPress: () => console.log('Invalid data')
    //       },
    //       {
    //         "text": 'ok',
    //         onPress: () => console.log('valid data')
    //       }
    //     ])} />
    //     <Carousel/>
    //     <Modal visible={isVisible} onRequestClose={() => setVisible(false)} animationType='slide'>
    //       <ScrollView>
    //         <Image source={imageIcon} alt="image" />
    //         <View>

    //           <Text style={{ padding: 20 }}>
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of type and
    //             scrambled it to make a type specimen book. It has survived not only
    //             five centuries, but also the leap into electronic typesetting,
    //             remaining essentially unchanged. It was popularised in the 1960s with
    //             the release of Letraset sheets containing Lorem Ipsum passages, and
    //             more recently with desktop publishing software like Aldus PageMaker
    //             including versions of Lorem Ipsum
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of type and
    //             scrambled it to make a type specimen book. It has survived not only
    //             five centuries, but also the leap into electronic typesetting,
    //             remaining essentially unchanged. It was popularised in the 1960s with
    //             the release of Letraset sheets containing Lorem Ipsum passages, and
    //             more recently with desktop publishing software like Aldus PageMaker
    //             including versions of Lorem Ipsum
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of type and
    //             scrambled it to make a type specimen book. It has survived not only
    //             five centuries, but also the leap into electronic typesetting,
    //             remaining essentially unchanged. It was popularised in the 1960s with
    //             the release of Letraset sheets containing Lorem Ipsum passages, and
    //             more recently with desktop publishing software like Aldus PageMaker
    //             including versions of Lorem Ipsum
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy text ever
    //             since the 1500s, when an unknown printer took a galley of type and
    //             scrambled it to make a type specimen book. It has survived not only
    //             five centuries, but also the leap into electronic typesetting,
    //             remaining essentially unchanged. It was popularised in the 1960s with
    //             the release of Letraset sheets containing Lorem Ipsum passages, and
    //             more recently with desktop publishing software like Aldus PageMaker
    //             including versions of Lorem Ipsum
    //           </Text>

    //         </View>
    //         <Image source={greenCard} alt="greencard" style={{ resizeMode: 'cover' }} />
    //         <Button title="close" onPress={() => setVisible(false)} />
    //       </ScrollView>
    //     </Modal>
    //     <StackNavigation/>
    //   </ScrollView>
    // </View>
    <>
    <StackNavigation/>
    </>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "red"
  }
})
