import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Metrics, TextCmp} from '../../../../themes';
import {Logg} from '../../../../utils';
import moment from 'moment';
import {normalize} from '../../../../themes/FontSize';
import {formatTime, truncateTextEnd} from '../../../../utils/functions';
import {iconsScroll} from '../../../../assets';
let scrollHeight = (((Metrics.appWidth * 70) / 100) * 85) / 100;
class CustomerDetail extends Component {
  render() {
    const {isShow, toogleModal, customerDetail} = this.props;
    const {status} = customerDetail;
    return (
      <Modal
        visible={isShow}
        onRequestClose={toogleModal}
        animationType="fade"
        transparent={true}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <TextCmp>Customer Infomation</TextCmp>
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
            <ScrollView
              contentContainerStyle={{
                // flex: 1,
                width: (Metrics.appWidth * 70) / 100,
                alignItems: 'flex-start',
                height: scrollHeight,
              }}
              style={{flex: 1}}>
              <View style={styles.top}>
                <View style={styles.checkin_time}>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      minHeight: 40,
                      padding: 10,
                      width: '45%',
                      borderBottomWidth: 0.5,
                    }}>
                    <TextCmp
                      style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                      Check in Time :
                    </TextCmp>
                  </View>
                  <View
                    style={{
                      minHeight: 40,
                      padding: 10,
                      borderBottomWidth: 0.5,

                      width: '55%',
                    }}>
                    <TextCmp
                      style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                      {customerDetail
                        ? '  ' + formatTime(customerDetail.date)
                        : ''}
                    </TextCmp>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 0.5,
                    minHeight: 40,
                    width: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Walk-in
                  </TextCmp>
                </View>
                <View style={styles.checkin_time}>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      minHeight: 40,
                      padding: 10,
                      width: '45%',
                      borderBottomWidth: 0.5,
                    }}>
                    <TextCmp
                      style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                      Nails Tech
                    </TextCmp>
                  </View>
                  <View
                    style={{
                      minHeight: 40,
                      padding: 10,
                      borderBottomWidth: 0.5,
                      width: '55%',
                    }}>
                    <TextCmp
                      style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                      {customerDetail &&
                        truncateTextEnd(customerDetail.staffName, 25)}
                    </TextCmp>
                  </View>
                </View>
                <View style={styles.checkin_time}>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      minHeight: 40,
                      padding: 10,
                      width: '45%',
                      borderBottomWidth: 0.5,
                    }}>
                    <TextCmp
                      style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                      Services
                    </TextCmp>
                  </View>
                  <View
                    style={{
                      minHeight: 40,
                      padding: 10,
                      borderBottomWidth: 0.5,
                      width: '55%',
                    }}>
                    <TextCmp
                      style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                      {customerDetail &&
                        truncateTextEnd(customerDetail.serviceName, 30)}
                    </TextCmp>
                  </View>
                </View>
              </View>
              {status && status === 'inservice' && (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => this.props.cancelCusInservice()}
                    style={{
                      marginLeft: 2,
                      paddingVertical: 10,
                      borderWidth: 0.5,
                      width: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TextCmp
                      style={{
                        fontSize: normalize(3),
                        fontWeight: 'bold',
                      }}>
                      Remove
                    </TextCmp>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.handleCusInservice(customerDetail)
                    }
                    style={{
                      marginLeft: 2,
                      paddingVertical: 10,
                      borderWidth: 0.5,
                      width: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TextCmp
                      style={{
                        fontSize: normalize(3),
                        fontWeight: 'bold',
                      }}>
                      Done
                    </TextCmp>
                  </TouchableOpacity>
                </View>
              )}

              <View
                style={{
                  alignItems: 'flex-start',
                  width: '55%',
                  alignSelf: 'flex-start',
                  height: '10%',
                  paddingLeft: 12,
                  justifyContent: 'flex-end',
                }}>
                <TextCmp
                  style={{
                    fontSize: normalize(3),
                    fontWeight: 'bold',
                  }}>
                  Service history
                </TextCmp>
              </View>
              <View
                style={{
                  width: '98%',
                  height: (scrollHeight * 5) / 100,
                  flexDirection: 'row',
                  borderWidth: 0.5,
                  margin: 2,
                  flex: 0,
                  flexWrap: 'wrap',
                }}>
                <View
                  style={{
                    borderRightWidth: 0.5,
                    padding: 5,
                    width: '10%',
                    height: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Service ID
                  </TextCmp>
                </View>
                <View
                  style={{
                    borderRightWidth: 0.5,
                    padding: 5,
                    width: '10%',
                    height: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Service Date
                  </TextCmp>
                </View>
                <View
                  style={{
                    borderRightWidth: 0.5,
                    padding: 5,
                    width: '20%',
                    height: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Services
                  </TextCmp>
                </View>
                <View
                  style={{
                    borderRightWidth: 0.5,
                    padding: 5,
                    width: '10%',
                    height: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Amount
                  </TextCmp>
                </View>
                <View
                  style={{
                    borderRightWidth: 0.5,
                    padding: 5,
                    width: '20%',
                    height: '100%',
                  }}>
                  <TextCmp
                    style={{
                      fontSize: normalize(3),
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
                    }}>
                    Nails Technician
                  </TextCmp>
                </View>
                <View
                  style={{
                    padding: 3,
                    width: '10%',
                    borderRightWidth: 0.5,
                  }}>
                  <TextCmp
                    style={{
                      fontSize: normalize(3),
                      fontWeight: 'bold',
                    }}>
                    Payment
                  </TextCmp>
                  <TextCmp
                    style={{
                      fontSize: normalize(3),
                      fontWeight: 'bold',
                    }}>
                    Method
                  </TextCmp>
                </View>
                <View
                  style={{
                    borderRightWidth: 0.5,
                    padding: 5,
                    width: '10%',
                    height: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Color Code
                  </TextCmp>
                </View>
                <View
                  style={{
                    padding: 5,
                    width: '10%',
                    height: '100%',
                  }}>
                  <TextCmp style={{fontSize: normalize(3), fontWeight: 'bold'}}>
                    Type
                  </TextCmp>
                </View>
              </View>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetail);
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
  header: {
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
  top: {
    width: '55%',
    margin: 2,
    borderWidth: 0.5,
    alignSelf: 'flex-start',
  },
  checkin_time: {
    flexDirection: 'row',
    width: '100%',
  },
};
