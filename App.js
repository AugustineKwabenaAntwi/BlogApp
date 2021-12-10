import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import BlogHomeScreen from './components/BlogHomeScreen';
import Blog from './components/Blog';
import BlogPostScreen from './components/BlogPostScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack =createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name ="HomeScreen" component = {BlogHomeScreen}
          options={{
            title:"Discover",
            headerStyle:{
        
            },
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontWeight:"bold",
              fontSize:40,
            },
        
            headerLeft:()=>{
              return(
                <TouchableOpacity onPress={()=>{navigation.navigate("BlogPost")}} style={{marginLeft:20}}>
                  <Fontisto name="nav-icon-grid-a" size={26} color="black" />
                </TouchableOpacity>
              );
              
            },
            headerRight:()=>{
              return(
                <TouchableOpacity style={{marginRight:20}}>
                  <Ionicons name="md-search" size={26} color="black" />
                </TouchableOpacity>
              );
              
            },
          }} 
          />
          <Stack.Screen
            name = "BlogPost" component={BlogPostScreen}
            options = {{
              headerRight:()=>{
                return(
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginHorizontal:10}}>
                    <Ionicons name="md-headset-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal:10}}>
                    <AntDesign name="hearto" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal:10}}>
                    <Ionicons name="md-share-social-outline" size={24} color="black" />
                    </TouchableOpacity>
                    </View>

                )
              }
            }}
            />

        
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
