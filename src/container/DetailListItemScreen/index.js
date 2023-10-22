import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DetailListItemScreen = props => {
  const {route} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>{route.params.title}</Text>
      <Text style={styles.textdesc}>{route.params.desc}</Text>
    </View>
  );
};

export default DetailListItemScreen;
