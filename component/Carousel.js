import React from 'react'
import { Image, StyleSheet,View } from 'react-native'
import Swiper from 'react-native-swiper'
const slide1 = require("../assets/7.jpg");
const slide2 = require("../assets/9.jpg");
const slide3 = require("../assets/10.jpg");
const slide4 = require("../assets/6.jpg");

const Carousel = () => {
  return (
    <Swiper loop={false}>
      <View style={styles.slide}>
        <Image style={styles.image} source={slide1} alt="slide1"/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.image} source={slide2} alt="greencard"/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.image} source={slide3} alt="greencard"/>
      </View>
      <View style={styles.slide}>
        <Image style={styles.image} source={slide4} alt="greencard"/>
      </View>
    </Swiper>
  )
}
export default Carousel;

const styles = StyleSheet.create({
  image:{
    // width: 100,
    flex:1,
    resizeMode:'contain',
    alignSelf: 'center'
  },
  slide:{
    flex:1
  }
})
