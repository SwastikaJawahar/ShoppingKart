import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class DetailListItemScreen extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    const {route} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.texttitle}>{route.params.title}</Text>
        <Text style={styles.textdesc}>{route.params.desc}</Text>
      </View>
    );
  }
}

export default DetailListItemScreen;
