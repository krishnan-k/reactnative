import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }} />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.bodyContent}>
          <Text style={styles.text}>
            Register your account
          </Text>
        </View>
        <View style={styles.bodyArea}>
          <View style={styles.areaStyle}>
            <FontAwesome name="user" size={24} color="black" />
            <TextInput  style={{ fontSize: email ? 15 : 15, width: 250 }}
              placeholder='enter your name'
            />
          </View>
        </View>
        <View style={styles.bodyRegister}>
          <View style={styles.areaStyle}>
            <MaterialIcons name="email" size={22} color="#3b3535" />
            <TextInput style={{ fontSize: email ? 15 : 15, width: 250 }}
              placeholder='enter your email'
            />
          </View>
        </View>
        <View style={styles.bodyRegister}>
          <View style={styles.areaStyle}>
            <AntDesign name="eye" size={22} color="#3b3535" />
            <TextInput style={{ fontSize: email ? 15 : 15, width: 250 }}
              placeholder='enter your password'
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 4 }}>
            <Text>keep me logged in</Text>
            <Text style={styles.forget}>forget password</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View style={styles.buttonRegister}>
            <Text>Already have an accout?</Text>
            <Pressable style={styles.registerButton} onPress={() => navigation.navigate("Login")}>
              <Text>Sign in</Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  image: {
    width: 160,
    height: 80,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#041E42",
    textAlign: "center"
  },
  bodyArea: {
    marginTop: 30
  },
  areaStyle: {
    flexDirection: "row-reverse",
    gap: 10,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#ededed",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 18,
    paddingRight: 18
  },
  placeholder: {
    textTransform: "capitalize"
  },
  bodyRegister: {
    marginTop: 15
  },
  forget: {
    color: "#007FFF"
  },
  button: {
    width: 250,
    backgroundColor: "#ffa430",
    borderRadius: 8,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonText: {
    padding: 15,
    textTransform: "capitalize",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16
  },
  buttonRegister: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    color: "grey",
    flexDirection: "row"
  }
})