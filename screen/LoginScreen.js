import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValid, setPasswordValid] = useState([]);
    const [error,setErrors] = useState([]);
    const passwordToggle = () => {
        setShowPassword(!showPassword)
    }
    
    const passwordValidation = (inputText) =>{
        const validationError = [];
        if(inputText.length < 8){
            validationError.push('Password must be at least 8 characters long.');
            setPasswordValid('');
        }
        else {
            setPasswordValid('Password is good');
        }
        setErrors(validationError);
        return validationError.length === 0;
    }
    
    const handlePasswordChange = (inputText) =>{
        setPassword(inputText);
        passwordValidation(inputText)
    }
    const handleSubmit = () =>{
        if(passwordValidation(password)){
            alert('Password is valid');
        }
        else{
            alert('Please correct the errors in the form.');
        }
    }
    return (
        <View style={styles.body}>
            <View style={{ alignItems: "center" }}>
                <Image style={styles.image} source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" }} />
            </View>
            <KeyboardAvoidingView>
                <View style={styles.bodyContent}>
                    <Text style={styles.text}>
                        Login to to your account
                    </Text>
                </View>
                <View style={styles.bodyArea}>
                    <View style={styles.areaStyle}>
                        <MaterialIcons name="email" size={22} color="#3b3535" />
                        <TextInput style={{ fontSize: email ? 15 : 15, width: 250 }}
                            placeholder='Enter your email'
                        />
                    </View>
                </View>
                <View style={styles.ps}>
                    <View style={styles.areaStyle}>
                        <MaterialCommunityIcons size={22} name={showPassword ? 'eye' : 'eye-off'}
                            onPress={passwordToggle}
                        />
                        <TextInput value={password}
                            secureTextEntry={!showPassword}
                            onChangeText={handlePasswordChange}
                            style={{ fontSize: password ? 15 : 15, width: 250 }}
                            placeholder='Enter your password'
                            validatePassword
                        />
                    </View>
                </View>
                {error.map((error, index) =>(
                    <Text key={index} style={{ color: 'red' }}>{error}</Text>
                ))}
                <Text style={{ color: 'green' }}>{passwordValid}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 4 }}>
                    <Text>Keep me logged in</Text>
                    <Text style={styles.forget}>Forget password</Text>
                </View>

                <Pressable style={styles.button}
                onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <View style={styles.buttonRegister}>
                    <Text>Don't have an account?</Text>
                    <Pressable style={styles.registerButton} onPress={() => navigation.navigate("Register")}>
                        <Text> Sign Up</Text>
                    </Pressable>
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginScreen

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
    bodyContent: {
        alignItems: "center",
        alignContent: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#041E42"
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
    ps: {
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
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: "grey"
    },

})