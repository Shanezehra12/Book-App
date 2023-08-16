import {StyleSheet, Text, View, Image, FlatList, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../Components/Header';
import SearchBox from '../Components/SearchBox';
import axios from 'axios';
import StarRating from 'react-native-star-rating';

const renderItem = ({item}) => (
  <View>
    <Image 
     style={styles.item} source={{uri: item.imageLink}}
     />
    <Text style={styles.text1}>{item.title}</Text>

    <View style={{flexDirection: 'row', marginLeft: -10}}>
      <StarRating
        disabled={false}
        emptyStar={'star'}
        fullStar={'star'}
        maxStars={5}
        rating={item.rating}
        fullStarColor={'gold'}
        emptyStarColor={'gainsboro'}
        starSize={15}
        starSpacing={5}
      />

      <Text style={styles.text2}>({item.reviews})</Text>
    </View>

    <Text style={styles.text1}>${item.price}</Text>
  </View>
);

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const Yscroll = useRef(new Animated.Value(0)).current;

  useEffect(() => getDataUsingSimpleGetCall(), []);

  const getDataUsingSimpleGetCall = () => {
    const headers = {
      'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
    };

    const config = {
      headers: headers,
    };

    // Make the API request
    axios
      .get('https://books-list-api.vercel.app/books', config)

      .then(json => setData(json.data.data))
      .finally(() => setLoading(false));

    /* // Handle the response
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      }); */
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Header />
        <SearchBox />
      </View>

      <Animated.FlatList
      
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: 30,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: Yscroll}}}],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  container: {
    marginHorizontal: 15,
  },

  text1: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
    left: -10,
  },

  text2: {
    fontSize: 12,
    fontWeight: '700',
    color: 'gray',
    left: 2,
  },

  item: {
    width: 150,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    left: -18,
    resizeMode: 'cover',
  },
});
