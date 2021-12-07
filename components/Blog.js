import React from 'react'
import { Image, Text, View,StyleSheet } from 'react-native'
import BlogHomeScreen from './BlogHomeScreen'

export default function Blog() {
    return (
        <View style = {styles.container}>
            <Image style={styles.image} source ={require("../assets/images/blog-img-1.png")} />
            <View style = {styles.infoContainer}>
                <View style = {styles.titleTextContainer}>
                    <Text numberOfLines={3} style={styles.titleText}>
                        Does Dry is January Actually 
                        Improve Your Health?
                    </Text>
                </View>
                <View>
                    <Image/>
                    <Text>Subash pratash</Text>
                    <Text>5min read</Text>
                </View>
            </View>
        </View>
    )
}

  
   

const styles= StyleSheet.create({
 container:{
     display:"flex",
     backgroundColor:"white",
     marginHorizontal:10,
     flexDirection:"row"
 },
 image:{
     width:130,
     height:150
 },
 infoContainer:{
     alignItems:"flex-start",
     justifyContent:"center"
 },
 titleText:{
     fontWeight:"bold",
     fontSize:16
 }
});