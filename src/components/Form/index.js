import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [imc, setImc] = useState();
  const [messageImc, setMessageImc] = useState("preencha o peso e altura.");
  const [textButton, setTextButton] = useState("Calcular");

  const calculate = () => {
    const calculateImc = (weight / (height * height)).toFixed(2);
    print(calculateImc)
    return setImc(calculateImc);
  };

  const validationImc = () => {
    if (weight !== null && height !== null) {
      calculate();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular Novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessageImc("preencha o peso e altura.");
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 65.554"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />

        <TouchableOpacity
          onPress={validationImc}
          style={styles.buttonCalculator}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc resultImc={imc} messageResultImc={messageImc} />
    </View>
  );
}
