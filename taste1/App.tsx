import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CourseDetail from './CourseDetail';
import Calculate from './Calculate';
import Signup from './Signup';
import Login from './Login';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Calculate: undefined;
  Contact: undefined;
  Signup: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CourseDetail} />
        <Stack.Screen name="Calculate" component={Calculate} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;