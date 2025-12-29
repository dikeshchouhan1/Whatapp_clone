import ButtonComp from '@/src/componets/atoms/ButtonComp'
import imagepath from '@/src/constants/imagepath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const TermsAgree = () => {
  const onAgree=()=>{
   router.push("/(auth)/Login")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcom_text}>Welcome to DevChat</Text>
        <Image source={imagepath.logo}
           style={styles.logo_style}
          resizeMode="contain"/>
          <Text style={styles.decripation_text}>
            Read Our Privacy policy . Tap "Agree and continue" to accept the Teams of Service.
          </Text>
          <View style={{width:moderateScale(300)}}>

          <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree}/>
          </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.dev_text}>DevChat</Text>
      </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:  verticalScale(84),
    paddingHorizontal:scale(30)
  },
  header:{
    alignItems:"center",
    gap:verticalScale(30)
  },
  footer:{
    alignItems:"center"
  },
  from_text:{
    fontSize:moderateScale(12),
    color:"#867373"
  },
  dev_text:{
     fontSize:moderateScale(15),
    color:"#000000ff",
    textTransform:"uppercase",
    fontWeight:"600"
  }
  ,
  welcom_text:{
    fontSize:moderateScale(30),
    fontWeight:"bold",
    color:"black",
  },
   logo_style: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  decripation_text:{
   textAlign:"center",
   fontSize:moderateScale(13),
   color:"black"
  }

})

export default TermsAgree