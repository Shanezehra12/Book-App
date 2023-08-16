import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Or any other icon library

const SearchBox = () => {
  return (
    <View style={styles.searchbox}>
      <Icon name="search1" size={20} color="black" style={{marginLeft: 20}} />
      <TextInput
        placeholder="Search..."
        color={"black"}
        placeholderTextColor={"black"}
        style={{marginLeft: 15, fontSize: 16}}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchbox: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 24,
    marginTop: 20,
    backgroundColor: "lightgray"
  },
});

