import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Loading from './Loading.js';
//usamos axios para traer la lista de los albumes desde la api de flikr y la respuesta de ese get, se setea como estado, en el render si tenemos que el estado NO
//es el del album, o sea, no se cargo, tiramos un loading
class AlbumList extends Component {
  state = { photoset: null };

  componentWillMount() {
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=55bb1f43534f83eacc494550b697265e&user_id=97554600%40N04&format=json&nojsoncallback=1&auth_token=72157709307135771-9fff3003b7d70786&api_sig=24a79737d7abd9ddd66d4784c20b0a01')
      .then(response => this.setState({ photoset: response.data.photosets.photoset }));
  }

  renderAlbums() {
    return this.state.photoset.map(album =>
      <AlbumDetail key={album.id} title={album.title._content}  albumId={album.id}  />
    );
  }

  render() {
    console.log(this.state);
    if (!this.state.photoset) {
			return (
					<Loading />
				);
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'grey'}}>
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      </View>
    );
  }
}

export default AlbumList;
