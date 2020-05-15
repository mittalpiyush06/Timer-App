import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, StyleSheet, Text, View, Header } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/App.js';


const Stack = createStackNavigator()


export default class App extends React.Component {
  render () {
      return (
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Timer App" 
                        component={Main}
                        options={{
                            headerStyle: {
                                backgroundColor: 'black',
                            },
                            headerTintColor:'white',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                justifyContent:'center',
                            },
                        }}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
