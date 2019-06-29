import React from 'react';
import { AppRegistry, View} from 'react-native';
import Button from './components/Button'
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import PhotoView from './components/PhotoView';
import Menu from './components/Menu';

import { Router, Scene } from 'react-native-router-flux';


// componente app donde cargamos el menu y todas las vainas
const App = () => (
  //uso router para moverme entre las pantallas, en cada una tengo la key para pasarme y el componente que la va a componer con el titulo que va a ir arriba
      <Router> 
        <Scene key="root">
          <Scene key="menu" component={Menu} title="Trabajo Práctico"  initial={true} />
          <Scene key="albumList" component={AlbumList} title="Album Selector"  />
          <Scene key="photoList" component={PhotoList} title="Photos" />
          <Scene key="photoView" component={PhotoView} title="Pictures"/>
        </Scene>
      </Router>
      
);


export default App;