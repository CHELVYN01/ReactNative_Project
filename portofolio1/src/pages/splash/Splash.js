import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { Image } from 'react-native'
import { imagelogo, imagescreen } from '../../assets/asset'
// import imagescreen from '../../assets/Image/bg.png'
// import logo from '../../assets/Image/logo.png'


const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabApp')
    }, 3000)
    }, [navigation])
  return (
    <ImageBackground source={imagescreen} style={styles.bg} >
      <Image source={imagelogo} style={styles.logo}  />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 222,
    height: 105
  }
})