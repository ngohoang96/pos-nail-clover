import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import themes from '../../../config/themes';
import ScaleTextLibrary from '../../../utils/ScaleTextLibrary';
import {normalize} from '../../../utils/scales';
import {styles_home} from '../styles-home';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {data} from '../../../Components/InitScreen/mockData';
export default class PaymentTips extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.containerFx065}>
        <ScrollView horizontal={true} style={styles.fx1P5}>
          {data.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.containerTouch}>
                <IonIcon name={item.icon} color={'#444444'} size={12}></IonIcon>
                <View style={styles.center}>
                  <ScaleTextLibrary
                    styl={styles.txtLabel}
                    font={themes.H5 - 1}
                    text={item.lable}></ScaleTextLibrary>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTouch: {
    minHeight: '40%',
    borderWidth: 1,
    borderColor: '#C1C1C1',
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    marginVertical: 1,
    marginRight: 10,
    backgroundColor: 'white',
    paddingVertical : 10
  },
  fx1P5: {flex: 1, padding: 5},
  center: {alignItems: 'center', justifyContent: 'center'},
  txtLabel: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 3,
  },
  containerFx065: {
    flex: 0.65,
    borderTopWidth: 1,
    borderTopColor: '#C1C1C1',
    backgroundColor: 'white',
    bottom: 0,
  },
});
