import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';



import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

import albumDetails from '../assets/data/albumDetails';



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

  }
});
