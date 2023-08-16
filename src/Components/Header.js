import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Hi Nick</Text>

        <Image
          source={require('../../assets/Load/man.png')}
          style={styles.loadimage}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginTop: 14,
  },

  text: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
    marginTop: 12
  },

  loadimage: {
    width: 50,
    height: 50,
    marginLeft: 200,
  },
});
