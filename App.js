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

const Stack =createStackNavigator();

export default function App() {
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
              <TouchableOpacity style={{marginLeft:20}}>
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

      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
