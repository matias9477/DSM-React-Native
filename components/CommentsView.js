
import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import Loading from './Loading.js';
import CommentsList from './CommentsList';

class CommentsView extends Component {
  state = { comments: null };
  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=ebb2c0e717ba643d98ac4c252cd7497b&format=json&nojsoncallback=1&photo_id=5123859750')
      .then(response => this.setState({ comments: response.data.comments.comment }));
  }



  render() {




    if (!this.state.comments){
      return(
        <Loading />
      )
    }

    return (
      <View style={{ flex: 1}}>
        <CommentsList comments={this.state.comments}/>
      </View>

    );
  }
}

export default CommentsView;
