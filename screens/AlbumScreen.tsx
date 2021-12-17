import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View,Image,Text, Button, TouchableOpacity } from 'react-native';


import albumDetails from '../assets/data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';
import PlayerWidget from '../components/PlayerWidget';
import SongListItem from '../components/SongListItem';



export default function AlbumScreen() {

  

  return (
    <View style={styles.container}>
     {/* render all songs */}
      <FlatList
        data={albumDetails.songs}
        renderItem={({item})=><SongListItem song={item}/>}
        keyExtractor={item=>item.id}
        // albumHeader component
        ListHeaderComponent={(<AlbumHeader album={albumDetails}/>)}
      />
     
     
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
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
    fontWeight:"500",
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
