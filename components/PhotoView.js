
import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import Loading from './Loading.js';
import CommentsList from './CommentsList.js';
import Card from './Card';
import CardSection from './CardSection';

class PhotoView extends Component {

  render() {

    return (

      <Card style={{ flex:1 }}>
        <CardSection>
          <Text style={styles.headerTextStyle}>{this.props.title}</Text>
        </CardSection>
        <CardSection>
            <Image style={styles.imageStyle}
              source={{ uri: this.props.url }}
              />

        </CardSection>
        <CardSection>
          <Text style={styles.headerTextStyle}>Comentarios</Text>
        </CardSection>
        <CardSection>
          <CommentsList style={styles.commentsStyle}  photoId={this.props.photoId} />
        </CardSection>
      </Card>

  );

  }
}
const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 18
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  commentsStyle: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
});

export default PhotoView;
