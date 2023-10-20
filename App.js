import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  ListItemScreen,
  ListItemstyle,
  DetailListItemScreen,
  DetailListItemstyle,
} from './src';
function App() {
  return (
    <SafeAreaView style={ListItemstyle.container}>
      <ScrollView>
        <View>
          <ListItemScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
