import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import Drawer from './Drawer'
import Img1 from '../assets/menu.png'

const styles = StyleSheet.create({

})
function Navbar() {
    return (
       <>
       <View style={{display:'flex',flexDirection:'row'}}>
           <View>
               <Image 
               source={Img1}
               />
           </View>
           <View>
               <Text>
           Food Choice
           </Text>
           </View>
           <View>
               <Avatar/>
           </View>
       </View>
       </>
    )
}

export default Navbar;
