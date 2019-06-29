import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

class ImagesList extends Component {

  render() {


    if (!this.props.images){
      return(
          <Text>No hay fotos</Text>
      );
    }

    return (

          <FlatList
            data={this.props.images}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => <PhotoDetail key={item.id} id={item.id} title={item.title} imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} />}

          />

    );
  }
}

export default ImagesList;
