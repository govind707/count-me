import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import Checkbox from "expo-checkbox";
import Entypo from "@expo/vector-icons/Entypo";
import { useUserStore } from "../utils/store";

const generateUniqueId = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

export const Registeration = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const { setUserDetails, setUserHistory, setLogin } = useUserStore();

  const handleRegister = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      setError("All fields are required");
      return;
    }

    const registeredAt = new Date().toDateString();
    const user = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      registeredAt,
      isAdmin,
      userId: generateUniqueId(),
    };

    setUserDetails(user);
    setUserHistory(user);
    setLogin({
      isLoggedIn: true,
      email: email.trim(),
      password: password.trim(),
    });

    alert("User has registered successfully");

    setTimeout(() => {
      navigation.navigate("Dashboard");
    }, 2000);

    setError("");
  };

  return (
    <View style={styles.container}>
      <Entypo name="add-user" size={50} color="black" />
      <Text style={styles.title}>Create Your Account</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={password}
        onChangeText={setPassword}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isAdmin}
          onValueChange={setIsAdmin}
        />
        <Text style={styles.checkboxLabel}>Are you an admin?</Text>
      </View>
      <Button title="Register" onPress={handleRegister} color="#007BFF" />
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
          Login
        </Text>
      </Text>
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
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#333",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  footerText: {
    marginTop: 20,
    color: "#333",
  },
  link: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
