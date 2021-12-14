import * as React from 'react';
import { StyleSheet,Text, View ,Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {  } from '../components/Themed';


import AlbumComponent from '../components/AlbumComponent';
import AlbumCategory from '../components/Albumcategory';



const albumCategory={
  title: 'Good vibes',
  albums: [{
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistHeadline: 'Helen',
  },{
    id: '2',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    artistHeadline: 'artistHeadline',
  },{
    id: '3',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    artistHeadline: 'Helen',
  },{
    id: '4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistHeadline: 'Helen',
  }]
}
export default function HomeScreen() {
  return (
    <View style={styles.container}>
     
      <AlbumCategory albumCategory={albumCategory}/>
      
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
