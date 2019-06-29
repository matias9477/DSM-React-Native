
import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';
import axios from 'axios';
import Loading from './Loading.js';
import CommentUser from './CommentUser';

class CommentsList extends Component {

  state = { comments: null,  stat : null};
  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=ebb2c0e717ba643d98ac4c252cd7497b&format=json&nojsoncallback=1&photo_id='+ this.props.photoId)
      .then(response => this.setState({ comments: response.data.comments, stat: response.data.stat  }));
  }



  render() {
    console.log(this.props.photoId);
    if (!this.state.stat){
      return(
        <Loading />
      );
    }

    if (!this.state.comments){
      return(
        <Text>Esta foto no tiene comentarios</Text>

      );
    }

    return (

      <View  >

          <FlatList
            data={this.state.comments.comment}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => <CommentUser content={item._content} author={item.author} url={item.permalink} /> }

          />

      </View>



    );
  }
}

export default CommentsList;
