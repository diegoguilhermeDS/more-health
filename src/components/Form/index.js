import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import ResultImc from "./ResultImc";

export default function Form() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [imc, setImc] = useState();
  const [messageImc, setMessageImc] = useState("preencha o peso e altura.");
  const [textButton, setTextButton] = useState("Calcular");

  const calculate = () => {
    const calculateImc = (weight / (height * height)).toFixed(2);
    return setImc(calculateImc);
  };

  const validationImc = () => {
    if(weight !== null && height !== null){
        calculate()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }

    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura.")
  };

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 65.554"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />

        <Button title={textButton} onPress={validationImc} />
      </View>
      <ResultImc resultImc={imc} messageResultImc={messageImc} />
    </View>
  );
}
