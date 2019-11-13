import {Dimensions} from 'react-native';
const colors = {
  gray: '#DCE0E9',
  caption: '#BCCCD4',
  active: '#007BFA',
  button: '#087f7b',

  /****Theme******/
  maincolor: '#BA2B26',
  redcolor: '#e32a28',
  yellow: '#f6da07',
  blue: '#28a8e0',
  purple: '#380856',
  gray1: '#777777',
  gray2: '#a3a3a3',
  gray3: '#e8e8e8',

  fontRegular: 15,
  corner: 40,

  border: '#f7f7f7',
  main: '#0960bd',
  paragraph: '#b6babb',

  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peter_river: '#3498db',
  amethyst: '#9b59b6',
  wet_asphalt: '#34495e',
  green_sea: '#16a085',
  nephritis: '#27ae60',
  belize_hole: '#2980b9',
  wisteria: '#8e44ad',
  midnight_blue: '#2c3e50',
  sun_flowers: '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  asbestos: '#7f8c8d',
  silver: '#bdc3c7',
  white: '#ffffff',
  mainbackground: '#ffffff',
  mainbgControl: '#ffffff',
  jalapeno_red: '#b71540',
  lucky_point: '#2c2c54',
  magenta: '#6F1E51',
  black: '#000000',
  // toolbarColor: '#27ae60',
  // toolbarColor: '#41436a',
  // toolbarColorBold: '#171c3f',
  // toolbarColorDark: '#c0392b',

  toolbarColor: '#0960bd',

  toolbarColorBold: '#007d34',
  toolbarColorDark: '#007d34',

  textColor: '#222222',
  borderColor: '#ecf0f1',
  bgCard: '#ecf0f1',
  transparent: 'transparent',
  // Bottom menu
  iconSelected: '#c0392b',
  iconDefaultColor: '#ffffff',
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const sizes = {
  imageHeight: 90,
  base: 16,
  font: 14,
  start: 14,
  padding: 10,
  paddingText: 6,
  btnpadding: 12,
  margin: 10,
  title: 24,
  border: 16,
  radius: 12,
  marginHorizontalList: 12,
  paddingInput: 5,

  borderRadius: 4,
  marginList: 4,
  heightHeader: 50,
  heightBottomQuestion: 40,
  heightButtonStandard: 30,
  paddingItem: 4,
  paddingButtonStandard: 10,
  fontSize: 14,
  fontSizeTabbar: 10,
  fontSizeHeader: 22,
  fontSizeMenu: 12,
  iconSize: 20,
  widthCenter: 35,
  iconSizeCenter: 35,
  paddingCircle: 6,
  paddingLeftHeader: 20,
  marginDialog: 12,
  shadow: 1,
  fontFamily: 'NunitoSansRegular',
  fontFamilyBold: 'NunitoSans-Bold',
  // fontFamily: 'eina-03-regular',
  // fontFamilyBold: 'eina-03-bold',
  // fontFamilyBold: 'NunitoSans-Bold',
  fontFamilyItalic: 'NunitoSans-Italic',
  NAVBAR_HEIGHT: 100,
};

export default {colors, sizes, width, height};
