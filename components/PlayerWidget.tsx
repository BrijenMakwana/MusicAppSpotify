import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, View,Image, Pressable } from 'react-native';
import { Entypo ,AntDesign,Foundation} from '@expo/vector-icons';

import { Audio } from 'expo-av';


import { Song } from '../types';
import { Sound } from 'expo-av/build/Audio';

export type SongListItemProps = {
    song: Song
}

export default function PlayerWidget(props: SongListItemProps) {

  const [mySound,setMySound] = useState<Sound|null>(null);
  const [isPlaying,setIsPlaying] = useState<Boolean>(false);
  const [duration,setDuration] = useState<Number|null>(null);
  const [position,setPosition] = useState<Number|null>(null);


  const onPlayBackStatusUpdate = (status) =>{
    //console.log(status);
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }
  
  const playCurrentSong = async () =>{
    if(mySound){
      await mySound.unloadAsync();
    }
      const {sound} = await Audio.Sound.createAsync(
        {uri: props.song.uri},
        {shouldPlay: isPlaying},
        onPlayBackStatusUpdate
      )
      setMySound(sound);
  }

  const onPlayPauseSong = async () =>{
    if(mySound === null){
      return
    }
    if(isPlaying){
      mySound.stopAsync();
     
    }else{
      mySound.playAsync();
      
    }
  }

  const getProgress = () =>{
    if(mySound === null || duration === null || position === null){
      return 0;
    }

    return (position/duration)*100;
  }

  useEffect(()=>{
    // play song
    playCurrentSong();
  },[])

  return (
        <View style={styles.container}>
          
        {/* song cover photo */}
            <Image
                source={{
                    uri: props.song.imageUri
                }}
                style={styles.image}
            />

            {/* song title and artists */}
            <View style={styles.songDetails}>
                <Text style={styles.title}>{props.song.title}</Text>
                <Entypo name="dot-single" size={24} color="lightgray" />
                <Text style={styles.artist} numberOfLines={1}>{props.song.artist}</Text>
            </View>

            {/* like and play/pause buttons */}
            <View style={styles.buttons}>
                <AntDesign name="hearto" size={24} color="white" style={{marginRight:20}}/>

                <Pressable onPress={onPlayPauseSong}>
                  <Foundation name={isPlaying ? "pause" : "play"} size={24} color="white" style={{marginRight:20}}/>
                </Pressable>
                
            </View>
        
      
    </View>   
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#282828",
    height:55,
    width:"100%",
    bottom:75,
    position:"absolute"
    
    
  },
  image:{
    height:"100%",
    width:55,
   
  },
  songDetails:{
    marginLeft:20,
    flex:1,
    flexDirection:"row",
    alignItems:"center"
  },
  title: {
    fontSize: 15,
    color:"white",
  },
  
  artist:{
    color:"lightgray",
    fontSize: 15,
  },
  buttons:{
    flexDirection:"row",
    alignItems:"center",
}
        
});
