import * as React from 'react';
import { StyleSheet,Text, View ,Image, FlatList} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {  } from '../components/Themed';


import AlbumCategory from '../components/Albumcategory';
import albumCategories from '../assets/data/albumCategories';




export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <FlatList
      data={albumCategories}
      renderItem={({item})=><AlbumCategory albumCategory={item}/>}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
