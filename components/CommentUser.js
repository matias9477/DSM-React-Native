

import React from 'react';
import { Text, View, Image, Linking, StyleSheet, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

const CommentUser = ({ content, author, url}) => {


  return (
    <View style={styles.contentStyle}>
      <Text style={styles.authorStyle}>
        {author}
      </Text>
      <Text>{content}</Text>
      
    </View>
)
};

const styles = StyleSheet.create({
  contentStyle: {
    padding: 10,
    width: null,
    flex: 1
  },
  commentStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  authorStyle: {
    fontSize: 14,
    fontWeight: "bold"
  }

});

export default CommentUser;
