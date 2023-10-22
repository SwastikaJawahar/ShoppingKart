import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ABF3F3',
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderCurve: 'circular',
    borderRadius: 10,
  },
  texttitle: {
    color: '#E61320',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  textdesc: {
    color: '#101A8E',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontStyle: 'italic',
    fontVariant: 'small-caps',
  },
});

export default styles;
