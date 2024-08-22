import React from 'react'
import { Image, StyleSheet,View } from 'react-native'
import Swiper from 'react-native-swiper'
const greenCard = require("../assets/greencard.png");

const Carousel = () => {
  return (
    <Swiper loop={false}>
      <View>
        <Image source={greenCard} alt="greencard"/>
      </View>
      <View>
        <Image source={greenCard} alt="greencard"/>
      </View>
      <View>
        <Image source={greenCard} alt="greencard"/>
      </View>
    </Swiper>
  )
}
export default Carousel;

const styles = StyleSheet.create({
  
})
