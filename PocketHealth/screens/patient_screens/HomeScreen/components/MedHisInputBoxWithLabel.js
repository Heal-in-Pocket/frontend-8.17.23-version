// import React, { useRef } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// const MedHisInputBoxWithLabel = ({ label, value, width, onChangeText, onFocus }) => {

//   const inputRef = useRef(null);

//   const handlePress = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <TouchableOpacity onPress={handlePress} activeOpacity={1}>
//       <View style={[styles.boxContainer, { width: width }]}>
//         <View style={styles.valueContainer}>
//           <View style={styles.labelValueContainer}>
//             <Text style={styles.boxLabel}>{label}</Text>              
//               <TextInput
//                 ref={inputRef}
//                 style={styles.boxField}
//                 value={value}
//                 onChangeText={onChangeText}
//                 onFocus={onFocus}
//                 placeholder='Click to Enter Your medical information ...'
//                 multiline
//               />
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };
import React, { forwardRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const MedHisInputBoxWithLabel = forwardRef(({ label, value, width, onChangeText, onFocus, returnKeyType, onSubmitEditing, autoFocus }, ref) => {

  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={[styles.boxContainer, { width: width }]}>
        <View style={styles.valueContainer}>
          <View style={styles.labelValueContainer}>
            <Text style={styles.boxLabel}>{label}</Text>
            <TextInput
              ref={ref}
              style={styles.boxField}
              value={value}
              onChangeText={onChangeText}
              onFocus={onFocus}
              placeholder='Click to Enter Your medical information ...'
              multiline
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              autoFocus={autoFocus}
              blurOnSubmit={true}       
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  boxContainer: {
    marginBottom: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#7C7C7C',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  labelValueContainer: {
    flex: 1,
    // minHeight: 130,
    // maxHeight: 200, // This sets a fixed height for the TextInput box
  },
  boxLabel: {
    fontSize: 15,
    fontWeight: '300',
    marginRight: 10,
  },
  boxField: {
    fontSize: 20,
    maxWidth: '100%',
    height: 100, // This sets a fixed height for the TextInput    
  },
  unit: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 18,
  },
});

export default MedHisInputBoxWithLabel;