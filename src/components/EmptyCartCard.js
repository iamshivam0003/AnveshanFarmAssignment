import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const EmptyCartCard = () => {
    const navigation = useNavigation()

    const handleContinueShop = () =>{
        navigation.navigate('Home')
    }
  return (
    <View style={styles.emptyCardContainer}>
    <Icon name="cart-outline" size={200} color="#9c9ea1" />
      <Text style={styles.missingCartTxt}>Your Cart Is Empty !</Text>
      <TouchableOpacity style={styles.missingCartBtn} onPress={handleContinueShop}>
        <Text style={styles.missingCartBtnTxt}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EmptyCartCard

const styles= StyleSheet.create({
    emptyCardContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    missingCartTxt:{
        color:'#000',
        fontSize:25,
        fontWeight:'800',
    },
    missingCartBtn:{
        padding:5,
        marginTop:10,
        height:50,
        width:180,
        backgroundColor:'#3870c9',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    missingCartBtnTxt:{
        color:'#fff',
        fontWeight:'800',
        fontSize:15
    }
})