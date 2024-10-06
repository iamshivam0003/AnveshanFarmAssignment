import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MyAccount = () => {
  return (
    <View style={styles.accountContainer}>
      <Text style= {styles.accountTxt}> Developed By :- Shivam Yadav</Text>
      <Text style= {styles.accountTxt}> Contact No.:- 7531040801</Text>
      <Text style= {styles.accountTxt}> Email :- iamshivam0003@gmail.com</Text>
    </View>
  )
}

export default MyAccount

const styles = StyleSheet.create({
  accountContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  accountTxt:{
    fontSize:20,
    color:'#000',
    fontWeight:'600'
  }
})