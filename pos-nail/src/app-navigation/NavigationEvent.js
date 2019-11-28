/**
 * @author: thai.nguyen
 * @date: 2018-12-11 14:46:58
 *
 *
 */
import { NativeEventEmitter, NativeModules, } from 'react-native';

const emitter = new NativeEventEmitter(NativeModules.RNNEventEmitter);

export const registerBottomTabSelectedListener = (emit) => {
  emitter.addListener('RNN.BottomTabSelected', emit);
};

export const removeBottomTabSelectedListener = (emit) => {
  emitter.removeListener('RNN.BottomTabSelected', emit);
};
