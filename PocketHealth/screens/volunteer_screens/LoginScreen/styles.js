import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import scaleWidth from '../../../components/scaleWidth';
import scaleHeight from '../../../components/scaleHeight';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',      
      justifyContent: 'flex-start',
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingVertical:0,      
      marginTop: 0,
      marginHorizontal:0
    },
    
    titleText: {
      alignItems: 'center',      
      fontSize: scaleHeight(45),
      fontWeight: 400  
    },
    error: {
      color: 'red',
      marginBottom: 20
    },   

    forgotPassword: {
      fontSize: scaleHeight(15),
      color: '#333232',      
      textDecorationLine: 'underline'
    },
    resend: {
      fontSize: scaleHeight(15),
      color: '#333232',      
      textDecorationLine: 'underline',
      textAlign: 'right'
    },

    button: {
      height: scaleHeight(70),
      width: wp("80%"),
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#395BCD',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: scaleHeight(22)
    },

  });

  export default styles;