import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function ResultImc({resultImc, messageResultImc}) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.numberImc}>{resultImc}</Text>
    </View>
  )
}