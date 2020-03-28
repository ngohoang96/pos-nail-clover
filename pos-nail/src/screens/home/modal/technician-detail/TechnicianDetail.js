import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Metrics, TextCmp} from '../../../../themes';
import {Logg} from '../../../../utils';
import moment from 'moment';
import {normalize} from '../../../../themes/FontSize';
import {iconsScroll} from '../../../../assets';

class TechnicianDetail extends Component {
  render() {
    const {technicianDetail, isShow, toogleModal} = this.props;
    let time = '';
    let count = '';
    if (technicianDetail !== null) {
      let {clockInTime, takeCount} = technicianDetail;
      let formatTime = clockInTime.replace(/[/Date()]/g, '');
      time = moment(parseFloat(formatTime)).format('HH:mm');
      count = takeCount;
    }

    return (
      <Modal
        visible={isShow}
        onRequestClose={toogleModal}
        animationType="fade"
        transparent={true}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.top}>
              <TextCmp>Technician Information</TextCmp>
              <TouchableOpacity
                onPress={() => toogleModal(false)}
                style={{
                  width: '30%',
                  height: '100%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={iconsScroll.deletemodal}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.header}>
              <TextCmp style={{fontSize: normalize(3)}}>
                Clock In : {time}
              </TextCmp>
              <TextCmp style={{marginLeft: 40, fontSize: normalize(3)}}>
                Counts : {count}
              </TextCmp>
              <TextCmp
                style={{
                  fontWeight: 'bold',
                  marginLeft: 40,
                  fontSize: normalize(3),
                }}>
                Total :
              </TextCmp>
            </View>
            <View style={styles.title}>
              <View style={{width: '20%', borderWidth: 0.5, paddingLeft: 3}}>
                <TextCmp style={{fontSize: normalize(3)}}>Customer</TextCmp>
              </View>
              <View
                style={{
                  width: '20%',
                  borderTopWidth: 0.5,
                  borderBottomWidth: 0.5,
                  paddingLeft: 3,
                }}>
                <TextCmp>Services</TextCmp>
              </View>
              <View style={{width: '10%', borderWidth: 0.5, paddingLeft: 3}}>
                <TextCmp style={{fontSize: normalize(3)}}>Price</TextCmp>
              </View>
              <View
                style={{
                  width: '10%',
                  borderTopWidth: 0.5,
                  borderBottomWidth: 0.5,
                  paddingLeft: 3,
                }}>
                <TextCmp style={{fontSize: normalize(3)}}>Discount</TextCmp>
              </View>
              <View style={{width: '15%', borderWidth: 0.5, paddingLeft: 3}}>
                <TextCmp style={{fontSize: normalize(3)}}>Suply Deduct</TextCmp>
              </View>
              <View
                style={{
                  width: '15%',
                  borderTopWidth: 0.5,
                  borderBottomWidth: 0.5,
                  paddingLeft: 3,
                }}>
                <TextCmp style={{fontSize: normalize(3)}}>Revenue</TextCmp>
              </View>
              <View style={{width: '10%', borderWidth: 0.5, paddingLeft: 3}}>
                <TextCmp style={{fontSize: normalize(3)}}>Tips</TextCmp>
              </View>
            </View>
            <View style={styles.content}></View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianDetail);
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  wrapper: {
    width: (Metrics.appWidth * 70) / 100,
    height: (Metrics.appHeight * 70) / 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    borderRadius: 5,
    elevation: 6,
    backgroundColor: '#fff',
  },
  top: {
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 0.5,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    height: '10%',
    paddingHorizontal: 2,
  },
  content: {
    height: '75%',
    width: '100%',
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 2,
    flexDirection: 'row',
  },
};
