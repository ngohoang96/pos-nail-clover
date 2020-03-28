import {StyleSheet} from 'react-native';
import {normalize} from '../../../../../themes/FontSize';

export const styles = StyleSheet.create({
  input_name: {
    backgroundColor: 'white',
    width: '45%',
    paddingVertical: 5,
    height: '50%',
  },
  txt_phone: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  wrapper_phone: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  wrapper_name: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  txt_firstname: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  wrapper_appoiment: {
    flex: 1,
    paddingHorizontal: 10,
  },
  txt_lastname: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  txt_appoiment: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  wrapper_dropdownappoiment: {
    backgroundColor: 'white',
    width: '100%',
    // paddingVertical: 5,
    height: '50%',
  },
  wrapper_timeappoiment: {
    flex: 2,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  txt_confirmtime: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  wrapper_selectTechnician: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  txt_selectTechnician: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  btnMain: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 5,
    height: '50%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  wrapper_selectServices: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  txt_selectServices: {
    fontWeight: 'bold',
    fontSize: normalize(5),
    marginBottom: 5,
  },
  btn_selectServices: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 5,
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  txt_listservices: {
    fontSize: normalize(5),
    alignContent: 'center',
    textAlignVertical: 'center',
    marginLeft: 2,
  },
  txt_Name: {
    backgroundColor: 'white',
    width: '90%',
    textAlignVertical: 'center',
    paddingLeft: 5,
    height: '50%',
    fontSize: normalize(4),
  },
});
