import React from 'react'
import {View,ScrollView,Text,FlatList, Image} from 'react-native'
import Blog from './Blog'
import BlogPostScreen from './BlogPostScreen'

export default function BlogHomeScreen() {
    const BlogList= [
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-3.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile01.jpg")},
        {title : "Can You  Make Bank?",
        BlogImage: require("../assets/images/blog-img-1.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile02.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-2.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile03.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-4.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile04.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-5.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile05.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-6.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile06.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-7.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile01.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-8.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile06.jpg")},
        {title : "Does Banku Actually Improve Your Health",
        BlogImage: require("../assets/images/blog-img-9.png"),
        AuthorName:"Ga Mantse",
        AuthorImage:require("../assets/images/profile05.jpg")},
    ]


    return (
        <View>
            <FlatList
                data ={BlogList}
                renderItem = {({item})=>{
                    return  <Blog
                    title = {item.title}
                    BlogImage={item.BlogImage}
                    AuthorName={item.AuthorName}
                    AuthorImage={item.AuthorImage}
                    />
                }}
                keyExtractor = {(item)=>item.title}

            />
        </View>
        
    )
}
