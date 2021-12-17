import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View,Image,Text, Button, TouchableOpacity } from 'react-native';
import {Album} from '../types';

import albumDetails from '../assets/data/albumDetails';
import SongListItem from '../components/SongListItem';

export type AlbumHeaderProps={
  album: Album
}

export default function AlbumHeader(props: AlbumHeaderProps) {

  
  

  return (
    // album header
      <View style={styles.albumContainer}>
        <Image
          source={{
            uri: props.album.imageUri
          }}

          style={styles.album}
        />
        <Text style={styles.albumName}>{props.album.name}</Text>
        <Text style={styles.by}>BY {props.album.by} . {props.album.numberOfLikes} LIKES</Text>
        <TouchableOpacity>
          <View style={styles.button}>
              <Text style={{color:"white",fontWeight:"600",textTransform:"uppercase"}}>play</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      
  );
}

const styles = StyleSheet.create({
  
  albumContainer:{
    alignItems:"center",
    marginBottom:15,
    marginTop:20
  },
  album:{
    height:170,
    width:170
  },
  albumName:{
    color:"white",
    fontSize:25,
    fontWeight:"bold",
    marginTop:20
  },
  by:{
    color:"lightgray",
    marginTop:7
  },
  button:{
    backgroundColor:"#1BB75B",
    height:40,
    width:130,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:40,
    marginTop:10
    
  }
});
