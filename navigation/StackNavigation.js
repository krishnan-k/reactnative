import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../screen/RegisterScreen';

const StackNavigation = () => {
    const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Register' component={RegisterScreen}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})