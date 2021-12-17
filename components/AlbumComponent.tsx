import * as React from 'react';
import { StyleSheet,Text, View ,Image,TouchableWithoutFeedback} from 'react-native';


import { Album } from '../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps={
    album: Album
    
}

export default function AlbumComponent(props: AlbumProps) {

  const navigation = useNavigation();
  const onPress = () =>{
  navigation.navigate("Album",);
}
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
      <Image
          source={{
              uri: props.album.imageUri
          }}
          style={styles.image}
      />
        <Text style={styles.title} numberOfLines={2}>{props.album.artistsHeadline}</Text>
        
      </View>
    </TouchableWithoutFeedback>
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
