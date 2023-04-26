import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#050505",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
  },
  buttonCalculator: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#CC2936",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff"
  }
});

export default styles;
