import React, { Component } from 'react';
import { Text, View, Image,  StyleSheet } from 'react-native';
import Button from './Button';
import { Actions } from 'react-native-router-flux';
      //logo de leloir porque es nuestro trabajo de tesis y el grupo es el mismo que para el tp, esto es un easter egg por si lo lee el profe, agunate leloir
      //esta va a ser la pantalla principal, aca vamos a mostrar nuestros nombres, el logo de flickr (si se pierde, googleando flickr es el primero)
      //albums dumbledore es el boton que nos va a llevar a los albums

const Menu = () => {
  return (
    <View style={{flex:1, flexDirection: 'column'}}>
      <View style={styles.title} >
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Diseño de Software Multi-pantallas</Text>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>Mercado, Turra, Simes</Text>
      </View>
      <View style={styles.title}>
            <View style={{flex: 0.37, marginBottom:0}}>
       <Button onPress={() => Actions.albumList()}>
          Albums Dumbledore
        </Button>


      </View>
      
        <Image 
          source={require('../images/Flickr_logo.png')}
          style= {{width:200, height:60}}/>
      </View>

      <View style={styles.title}>
      </View>

      <View style={styles.title}>
        <Image 
          source={require('../images/Leloir-Logo-Vector.png')}
          style= {{width:70, height:70}}/>
          <Text style={{color: 'white'}}>Developed by Leloir Team</Text>
        </View>

    </View>
  );
};

var styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: 'center',
    marginRight: 28,
    backgroundColor: '#2E4053'
  }
});

export default Menu;
