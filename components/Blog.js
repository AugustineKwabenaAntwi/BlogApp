import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BlogHomeScreen from './BlogHomeScreen'

export default function Blog({title,BlogImage,AuthorName,AuthorImage,navigation}) {
    return (
        <View
             style = {styles.container}>
            <View style = {styles.imagebox}>
            <Image style={styles.image} source ={BlogImage} />
            </View>
            <View style = {styles.infoContainer}>
                <View style={styles.container2}>
                <View  style = {styles.titleTextContainer}>
                    <Text numberOfLines={3} style={styles.titleText}>
                       {title}
                    </Text>
                </View>
                <View style={styles.authorDetail}>
                    <Image style = {styles.profileImage} source = {AuthorImage}/>
                    <Text style={styles.authorName}>{AuthorName}</Text>
                    <Text style={styles.readTime}>5min read</Text>
                </View>

                </View>
            </View>
        </View>
    )
}

  
   

const styles= StyleSheet.create({
 container:{
     backgroundColor:"white",
     marginHorizontal:5,
     flexDirection:"row",
     marginVertical:10,
     elevation:4,
 },
 imagebox:{
    width:130,
    height:150,
    elevation:8,
 },
 image:{
     width:130,
     height:150,
     borderWidth:2,
     borderColor:"#fff",
 },
 infoContainer:{
    marginHorizontal:10,
    justifyContent:"center",
    alignItems:"flex-start",
 },
 titleTextContainer:{
     flexDirection:'row'

 },
 titleText:{
     flex:1,
     fontWeight:"bold",
     fontSize:18,
 },
 profileImage:{
     width:30,
     height:30,
     borderRadius:100
 },
 authorDetail:{
     marginTop:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
 },
 authorName:{
     fontSize:14,
     marginLeft:10,
 },
 readTime:{
     fontSize:12,
     color:"gray",
    marginLeft:20
 }
});