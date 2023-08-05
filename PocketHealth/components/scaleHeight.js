import { Dimensions } from 'react-native';

// base height for standard iPhone 13 Pro
const baseHeight = 844;

const scaleHeight = (size) => (Dimensions.get('window').height / baseHeight) * size;

export default scaleHeight;