import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import HomeScreen from './HomeScreen';
import Calculate from './Calculate';
import CourseDetail from './CourseDetail';

const Stack = createNativeStackNavigator();

const Index: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Courses" component={CourseDetail} />
                <Stack.Screen name="Calculate" component={Calculate} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;