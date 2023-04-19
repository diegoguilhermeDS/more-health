import { View, Text } from 'react-native'
import React from 'react'

export default function ResultImc({resultImc, messageResultImc}) {
  return (
    <View>
      <Text>{messageResultImc}</Text>
      <Text>{resultImc}</Text>
    </View>
  )
}