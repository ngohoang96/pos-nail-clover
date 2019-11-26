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
          uri: 'https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/01/mastercard-new-logo-content-2019.jpg',
        }}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 3,
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
