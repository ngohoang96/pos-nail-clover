import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

export default (props = {}) => {
  return (
    <View style={[styles.containerImage, props.containerStyles]}>
      <Image
        resizeMode="stretch"
        style={[styles.imagelogo , props.imageStyles]}
        source={{
          uri: 'http://pngimg.com/uploads/google/google_PNG19644.png',
        }}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingLeft: '10%',
  },
  imagelogo: {
    height: '60%',
    width: '20%',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
