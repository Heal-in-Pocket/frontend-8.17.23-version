import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BigShowcaseBoxWithLabel from '../../../../components/BigShowcaseBoxWithLabel';
import ShowcaseBoxWithLabel from '../../../../components/ShowcaseBoxWithLabel';

const SearchPastVisitReport = ({ title, patientInfo, chiefComplaint, providerReport, medicalHistory, vitalData, width }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const firstLine = vitalData.slice(0, 3);
  const secondLine = vitalData.slice(3);


  return (
    <View style={{ width: '100%'}}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.headerText}>{title}</Text>        
        <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
      </TouchableOpacity>

      {isExpanded && (
        <View style={ {alignItems: 'center'} }>
        <Text style={styles.classifyText}>Patient's Infomation:</Text>
        <ShowcaseBoxWithLabel                
          label={patientInfo[0].label}
          value={patientInfo[0].value}                
          width={width}
        />
        <ShowcaseBoxWithLabel                
          label={patientInfo[1].label}
          value={patientInfo[1].value}                       
          width={width}
        />
        <BigShowcaseBoxWithLabel label={"Site/DOS"} value={patientInfo[2].value + ' [' + patientInfo[3].value+']'} width={width}/>
        <Text style={styles.classifyText}>Chief Complaint:</Text>
        <BigShowcaseBoxWithLabel label={chiefComplaint.label} value={chiefComplaint.value} width={width}/>
        <Text style={styles.classifyText}>Medical Provider's Note:</Text>
        {/* render doctor's report */}
        {providerReport.map((item, index) => {            
            return <BigShowcaseBoxWithLabel key={index} {...item} width={width}/>;
        })} 
        
        <Text style={styles.classifyText}>Patient's Medical Infomation:</Text>
        {/* render patient's medical history */}
        <BigShowcaseBoxWithLabel label={medicalHistory[0].label} value={medicalHistory[0].value} width={width}/>
        <BigShowcaseBoxWithLabel label={"Current Medication/Allergies"} value={medicalHistory[1].value + ' [Allergies: ' + medicalHistory[2].value+']'} width={width}/>

        {/* render patient's vital data with unit */}
        <View style={{width:'95%', flexDirection: 'row', justifyContent: 'space-between',}}>
            {firstLine.map((item, index) => {
              return (
                <ShowcaseBoxWithLabel 
                  key={index}
                  label={item.label}
                  value={item.value}
                  unit={item.unit}
                  width='30%'
                />
              )
            })}
        </View>
        <View style={{width:'95%', flexDirection: 'row', justifyContent: 'space-between',}}>
            {secondLine.map((item, index) => {
              return (
                <ShowcaseBoxWithLabel
                  key={index}
                  label={item.label}
                  value={item.value}
                  unit={item.unit}
                  width='45%'
                />
              )
            })}
        </View>

        </View>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C5D1F9',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C5D1F9',
    borderRadius: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  classifyText: {
    fontSize: 16,
    fontWeight: '500',
    color:'#395BCD'
  },
});

export default SearchPastVisitReport;