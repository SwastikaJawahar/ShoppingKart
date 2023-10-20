import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ListItemScreen,
  ListItemstyle,
  DetailListItemScreen,
  DetailListItemstyle,
} from './src';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={style.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Shopping Kart'}}
          name="ListItem"
          component={ListItemScreen}
        />
        <Stack.Screen
          options={{title: 'Specification'}}
          name="DetailDesc"
          component={DetailListItemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
