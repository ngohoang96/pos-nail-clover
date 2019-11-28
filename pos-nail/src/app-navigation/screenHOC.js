/**
 * @author: thai.nguyen 
 * @date: 2018-11-29 17:10:08 
 *  
 * 
 */
import React from 'react';
import R from 'ramda';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { DefaultStyle, } from './NavigatorStyles';
import TransitionState from './TransitionState';
import { createCustomPush, createPopFunc, } from './customMethodCreators';
// import { Logg, } from '../utils';

// import { AppNavigation, } from '.';

//const logg = Logg.create('screen hoc');

// Constants
const navigationDebounceDuration = 400;

// Helper functions to extract data
const getNavigatorStyle = R.pathOr(DefaultStyle, ['navigatorStyle',]);

const screenHOC = (WrappedComponent) => {
  // Get component style or use a default if it doesn't have one
  const navigatorStyle = getNavigatorStyle(WrappedComponent);

  class Wrapper extends React.Component {
    static navigatorStyle = navigatorStyle;

    constructor(props) {
      super(props);
      this.navigator = {};
      // });
    }

    componentWillMount() {
      // Listen to navigation events
      // this.props.navigator.addOnNavigatorEvent(this._onNavigatorEvent);
      // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      
    }

    componentDidMount() {
      setTimeout(TransitionState.stop, navigationDebounceDuration);
    }

    render() {
      const { componentId, } = this.props;

      this.navigator._push = createCustomPush(componentId);
      this.navigator._pop = createPopFunc(componentId);
      return (
        <WrappedComponent {...this.props} navigator={this.navigator} navigatorKey={this.navigatorKey} />
      );
    }
  }

  // Copies non-react specific statics from a target component to the HOC component
  hoistNonReactStatic(Wrapper, WrappedComponent);
  return Wrapper;
};

export default screenHOC;
