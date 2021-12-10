import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View ,Text, Image, StyleSheet, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import App from '../App'

export default function BlogPostScreen({navigation,route}) {
     const { newtitle,newBlogImage,newAuthorName,newAuthorImage} = route.params
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate("HomeScreen")}}>
                <Image style={styles.blogImage} source={newBlogImage}/>
            </TouchableOpacity>

            <Text style={styles.title}>{newtitle}</Text>
            <View style={styles.authorDetail}>
                <Image style={styles.authorImage} source={newAuthorImage}/>
                <Text style={styles.authorName}>{newAuthorName}</Text>
                <Text style={styles.readTime}> 4 min read</Text>
            </View>
            <View>
                <Text style = {styles.blogText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Nibh cras pulvinar mattis nunc sed blandit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Integer eget aliquet nibh praesent tristique magna sit amet. Sem et tortor consequat id porta nibh venenatis. Vestibulum lectus mauris ultrices eros. Quis viverra nibh cras pulvinar mattis nunc sed. Felis eget nunc lobortis mattis aliquam. In iaculis nunc sed augue. Ut eu sem integer vitae justo eget magna. Cursus turpis massa tincidunt dui ut ornare lectus. Habitasse platea dictumst quisque sagittis purus sit amet. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Habitant morbi tristique senectus et netus. Luctus accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Nibh tortor id aliquet lectus proin. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Facilisis volutpat est velit egestas dui id ornare arcu odio.

Semper risus in hendrerit gravida rutrum quisque non. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Lacinia quis vel eros donec ac odio tempor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Purus gravida quis blandit turpis cursus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquet lectus proin nibh nisl condimentum id. Faucibus ornare suspendisse sed nisi. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ipsum dolor sit amet consectetur adipiscing elit. Arcu odio ut sem nulla pharetra diam sit. Scelerisque in dictum non consectetur a erat nam. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget velit aliquet sagittis id consectetur. A arcu cursus vitae congue. Dolor morbi non arcu risus quis varius. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nisl suscipit adipiscing bibendum est ultricies. Luctus accumsan tortor posuere ac ut.

Massa placerat duis ultricies lacus sed turpis. Vitae nunc sed velit dignissim sodales. Amet consectetur adipiscing elit duis tristique. Sit amet porttitor eget dolor morbi non arcu. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Purus gravida quis blandit turpis cursus. Pellentesque diam volutpat commodo sed. Sit amet risus nullam eget felis. Turpis egestas sed tempus urna et pharetra pharetra massa. Aliquam ultrices sagittis orci a. Nunc congue nisi vitae suscipit. Nisi est sit amet facilisis magna etiam. Felis eget velit aliquet sagittis id consectetur purus ut. Cursus sit amet dictum sit amet. Rutrum quisque non tellus orci. Ultricies mi quis hendrerit dolor magna eget est.

Tempus egestas sed sed risus pretium quam. Sit amet risus nullam eget felis eget. Leo urna molestie at elementum. Ipsum a arcu cursus vitae. Ut ornare lectus sit amet est placerat in egestas erat. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Velit scelerisque in dictum non consectetur a. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Justo laoreet sit amet cursus sit amet.

Malesuada pellentesque elit eget gravida cum sociis. Elementum curabitur vitae nunc sed. Tincidunt dui ut ornare lectus sit amet est placerat. Malesuada bibendum arcu vitae elementum curabitur vitae. Tristique magna sit amet purus gravida quis blandit turpis. At lectus urna duis convallis convallis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Lectus arcu bibendum at varius vel pharetra vel. Donec ultrices tincidunt arcu non sodales neque sodales ut. Etiam tempor orci eu lobortis elementum nibh tellus molestie.
                </Text>
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        marginHorizontal:20,
    },
    authorName:{marginHorizontal:3},
    readTime:{
        marginHorizontal:3,
        color:"#aaa"
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        marginVertical:10

    },
    blogImage:{
        width:350,
        height:350,
        marginVertical:10,
        alignSelf:"center"
    },
    authorDetail:{
        flexDirection:"row",
        marginVertical:10
    },
    authorImage:{
        width:30,
        height:30,
        borderRadius:100,
        marginHorizontal:3
    },
    blogText:{
        lineHeight:25,
        fontSize:16
    }
})