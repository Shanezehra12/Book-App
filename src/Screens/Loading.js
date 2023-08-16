import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import SearchBox from '../Components/SearchBox';
import Header from '../Components/Header';

const Loading = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 4000);
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Header/>
        <SearchBox />
      </View>

      <Image
          source={{uri: "https://i.stack.imgur.com/h6viz.gif"}}
          style={styles.loadimage}
        />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  container: {
    marginHorizontal: 15,
  },

  loadimage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    margin: 100
  },

});
