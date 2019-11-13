import { StyleSheet, Dimensions } from 'react-native';
import themes from './themes';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  flex: {
    flex: 1
  },
  relative: {
    position:'relative'
  },
  absolute: {
    position:'absolute'
  },
  textwhite: {
    color: themes.colors.white
  },
  overflow: {
    overflow: 'hidden'
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  radius: {
    borderRadius: themes.sizes.borderRadius
  },
  textcenter: {
    textAlign: 'center'
  },
  textbasic: {
    fontSize: 14
  },
  border: {
    borderWidth: 1,
    borderColor: themes.colors.border
  },
  itemContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: themes.colors.borderColor,
    padding: themes.sizes.padding * 1.6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
   
  },
  middle: {
    
    alignItems: 'center'
  },
  spaceheader: {
    marginBottom: themes.sizes.heightHeader
  },
  box2: {
    width: width / 2,
    height: width / 2
  },
  absolute: {
    position: 'absolute'
  },
  relative: {
    position: 'relative'
  },

  visible: {
    overflow: 'visible'
  },

  hidden: {
    overflow: 'hidden'
  },

  row: {
    flexDirection: 'column'
  }, test : {width : 100 , backgroundColor : 'yellow' , paddingRight : 50},
  fullscreen: {
    width: width - themes.sizes.marginHorizontalList * 8
  },
  fullwidth: {
    width
  },
  full1_2width: {
    width: width / 2
  },
  maincolor: {
    color: themes.colors.main
  },
  mainbgcolor: {
    backgroundColor: themes.colors.white
  },
  paddTopBot: {
    paddingTop: themes.sizes.paddingText,
    paddingBottom: themes.sizes.paddingText
  },
  recommendation: {
    width: (width - themes.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: themes.colors.white,
    // overflow: 'hidden',
    borderTopRightRadius: themes.sizes.border,
    borderTopLeftRadius: themes.sizes.border
  },
  shadow: {
    // shadowColor: themes.colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 6
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 10,
    elevation: themes.sizes.shadow
  },
  textcolor: {
    color: themes.colors.textColor
  },

  bgcolor: {
    backgroundColor: themes.colors.concrete
  },
  padding_5: {
    padding: themes.sizes.padding
  },
  padding_vertical: {
    padding: themes.sizes.padding / 2
  },
  padding_5_2x: {
    padding: themes.sizes.padding * 2
  },
  margin_t_5: {
    marginTop: 10
  },

  margin_b_5: {
    marginBottom: 10
  },

  margin: {
    margin: 10
  },

  heading: {
    fontSize: themes.sizes.fontSizeHeader,
    fontWeight: 'bold',
    color: themes.colors.maincolor , 
  },

  headingSmall: {
    fontSize: themes.sizes.fontSizeHeader - 4,
    fontWeight: 'bold',
    color: themes.colors.textColor
  },

  paragraph: {
    fontSize: 14,
    color: themes.colors.gray1
  },

  paragraphSmall: {
    fontSize: 10,
    color: themes.colors.paragraph
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.button
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: themes.colors.button
  }
});
