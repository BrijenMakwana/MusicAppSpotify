import * as React from 'react';
import { StyleSheet,Text, View ,Image} from 'react-native';

import EditScreenInfo from './EditScreenInfo';
import {  } from './Themed';
import { Album } from '../types';

export type AlbumProps={
    album: Album
    
}

export default function AlbumComponent(props: AlbumProps) {
  return (
    <View style={styles.container}>
     <Image
        source={{
            uri: props.album.imageUri
        }}
        style={styles.image}
     />
      <Text style={styles.title} numberOfLines={2}>{props.album.artistsHeadline}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:155,
    padding:11
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"gray",
    marginTop:15
  },
  image:{
    width:140,
    height:140,
    
  }
  ,
});
