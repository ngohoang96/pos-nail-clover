import {StyleSheet} from 'react-native';
import {normalize} from '../../../../../themes/FontSize';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 3,
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
    height: 40,
    justifyContent: 'center',
  },
  wrapper_technician: {
    width: '25%',
    height: 40,
    justifyContent: 'center',
  },
});
