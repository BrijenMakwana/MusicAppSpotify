import * as React from 'react';
import { StyleSheet, View , FlatList} from 'react-native';

import {  } from '../components/Themed';


import AlbumCategory from '../components/Albumcategory';
import albumCategories from '../assets/data/albumCategories';




export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* render all categories in flatlist */}
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
  }
});
