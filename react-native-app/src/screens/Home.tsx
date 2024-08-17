import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="app-registration" size={50} color="black" />
      <Text style={styles.welcomeText}>
        Welcome to <Text style={styles.boldText}>CountMe</Text>, your seamless
        solution for registration and verification.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="#007BFF"
        />
        <View style={styles.spacing} />
        <Button
          title="Register"
          onPress={() => navigation.navigate("Registration")}
          color="#28a745"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
    color: "#007BFF",
  },
  buttonContainer: {
    width: "80%",
  },
  spacing: {
    height: 20,
  },
});
