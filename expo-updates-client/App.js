import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working 2 </Text>
      <Text>{Constants.expoConfig.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
