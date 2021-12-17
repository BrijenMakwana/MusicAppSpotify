import * as React from 'react';
import { StyleSheet,Text, View ,FlatList} from 'react-native';


import { Album } from '../types';

import AlbumComponent from './AlbumComponent';

export type AlbumCategoryProps={
    albumCategory:{
        id:string;
        title: string,
        albums: Album[]
    }
   
    
}

export default function AlbumCategory(props: AlbumCategoryProps) {
  return (
      <View>
        {/* category title */}
          <Text style={styles.title}>{props.albumCategory.title}</Text>
          {/* render all album component */}
        <FlatList
            data={props.albumCategory.albums}
            renderItem={({item})=><AlbumComponent album={item}/>}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
      />
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:155
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white",
    marginVertical:10,
    marginLeft:10
  },
  image:{
    width:"100%",
    height:155
    
  }
  ,
});
