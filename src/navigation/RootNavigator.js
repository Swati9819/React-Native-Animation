import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import BasicAnimation from '../screens/BasicAnimation';
import BasicsOfPanResonder from '../screens/BasicAnimation/PanResponder/index';

const Stack = createNativeStackNavigator();

const AnimationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={RouteName.BASIC_ANIMATION}
        component={BasicAnimation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={RouteName.BASIC_PAN_RESPONDER}
        component={BasicsOfPanResonder}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AnimationStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
