import {StyleSheet} from 'react-native';
import {normalize} from '../../../../../themes/FontSize';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  wrapper_input: {
    width: '11%',
    height: 30,
    borderWidth: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    fontSize: normalize(3),
  },
  wrapper_service: {
    width: '16%',
    justifyContent: 'center',
  },
  wrapper_technician: {
    width: '25%',
    minHeight: 40,
    paddingLeft: 8,
    justifyContent: 'center',
  },
});
