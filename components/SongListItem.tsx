import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet,Text, View,Image } from 'react-native';


import albumDetails from '../assets/data/albumDetails';
import { Song } from '../types';

export type SongListItemProps = {
    song: Song
}

export default function SongListItem(props: SongListItemProps) {



  return (
    <View style={styles.container}>
        <Image
            source={{
                uri: props.song.imageUri
            }}
            style={styles.image}
        />
        <View style={styles.songDetails}>
            <Text style={styles.title}>{props.song.title}</Text>
            <Text style={styles.artist} numberOfLines={1}>{props.song.artist}</Text>
        </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"center",
    marginTop:20
  },
  title: {
    fontSize: 20,
    color:"white",
  },
  image:{
    height:55,
    width:55,
   
  },
  artist:{
    color:"lightgray",
    marginTop:5,
    fontSize: 15,
  },
  songDetails:{
    marginLeft:20,
    alignItems:"flex-start",
    justifyContent:"center",
    flex:1,
     

  }
});
