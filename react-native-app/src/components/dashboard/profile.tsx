import React from "react";
import { useUserStore } from "../../utils/store";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#eef2f3",
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007BFF",
  },
  profileInfo: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoItem: {
    marginBottom: 15,
    fontSize: 18,
    color: "#333",
  },
  infoLabel: {
    fontWeight: "600",
    color: "#555",
  },
});

export const Profile = () => {
  const { user } = useUserStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoItem}>
          <Text style={styles.infoLabel}>First Name:</Text>{" "}
          {user.firstName ?? ""}
        </Text>
        <Text style={styles.infoItem}>
          <Text style={styles.infoLabel}>Last Name:</Text> {user.lastName ?? ""}
        </Text>
        <Text style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text> {user.email ?? ""}
        </Text>
      </View>
    </View>
  );
};
