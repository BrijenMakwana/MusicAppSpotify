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
      <Text style={styles.title}>{props.album.artistHeadline}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:155,
    padding:10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"gray",
    marginTop:15
  },
  image:{
    width:"100%",
    height:155
    
  }
  ,
});
