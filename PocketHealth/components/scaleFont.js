import { Dimensions } from 'react-native';

// based on iphone 13 pro's scale
const baseWidth = 390;

const scaleFont = (size) => (Dimensions.get('window').width / baseWidth) * size;

export default scaleFont;

