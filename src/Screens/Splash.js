import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Loading');
    }, 4000);
  }, []);

  return (
    <View style={styles.main}>
      <View>
        <Image
          source={require('../../assets/Splash/book.jpg')}
          style={styles.splashimage}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
  },

  splashimage: {
    width: 170,
    height: 200,
    alignSelf: 'center',
    margin: 200
  },
});
