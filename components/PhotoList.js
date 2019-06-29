import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import Loading from './Loading.js';
//
class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3c3933032cbe1055e0f236cc4c4a067f&photoset_id=${this.props.albumId}&user_id=97554600%40N04&format=json&nojsoncallback=1&auth_token=72157709308048071-30d632dedd8720fd&api_sig=32403710ee14a48f01b8d9b69d681649`)
   
      .then(response => this.setState({ photos: response.data.photoset.photo }));
  }

  renderAlbums() {
    return this.state.photos.map(photo =>
      <PhotoDetail key={photo.title} id={photo.id} title={photo.title} imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
    );
  }

  render() {
    console.log(this.state);


    if (!this.state.photos) {
			return (
          <Loading />
				);
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        </View>
    );
  }
}

export default PhotoList;
