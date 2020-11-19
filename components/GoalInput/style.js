import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  button: {
    width: "45%",
  },
});

export default styles;
