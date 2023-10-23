import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  TouchableOpacity: {
    height: 40,
    backgroundColor: '#FA6290',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    backgroundColor: '#ffffcc',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 0,
  },
  itemView: {
    flex: 1,
    backgroundColor: '#ffffcc',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  addItemButton: {
    height: 40,
    width: 120,
    backgroundColor: '#F7054E',
    // marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    height: 40,
    width: 300,
    backgroundColor: '#FA99A8',
  },
  ButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
