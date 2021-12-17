import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet,Text, View,Image } from 'react-native';
import { Entypo ,AntDesign,Foundation} from '@expo/vector-icons';


import albumDetails from '../assets/data/albumDetails';
import { Song } from '../types';

export type SongListItemProps = {
    song: Song
}

export default function PlayerWidget(props: SongListItemProps) {



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
            <Entypo name="dot-single" size={24} color="lightgray" />
            <Text style={styles.artist} numberOfLines={1}>{props.song.artist}</Text>
        </View>
        <View style={styles.buttons}>
            <AntDesign name="hearto" size={24} color="white" style={{marginRight:20}}/>
            <Foundation name="pause" size={24} color="white" style={{marginRight:20}}/>
        </View>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
    backgroundColor:"#282828",
    height:70
    
  },
  title: {
    fontSize: 20,
    color:"white",
  },
  image:{
    height:"100%",
    width:70,
   
  },
  artist:{
    color:"lightgray",
    marginTop:5,
    fontSize: 15,
  },
  songDetails:{
    marginLeft:20,
    flex:1,
    flexDirection:"row",
    alignItems:"center"
},
  buttons:{
    flexDirection:"row",
    alignItems:"center"
}
        
});
