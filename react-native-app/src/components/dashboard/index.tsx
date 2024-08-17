import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useUserStore } from "../../utils/store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#eef2f3",
  },
  titleContainer: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  item: {
    width: "100%",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});

export const DashboardHome = () => {
  const { registrationHistory, deleteUser } = useUserStore();
  const user = registrationHistory[0];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Registered at CountMe</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {user === undefined ? (
          <Text style={styles.emptyText}>No registrations yet.</Text>
        ) : (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {" "}
              Hey {user.firstName}, you have successfully verified at CountMe
            </Text>
            <Text style={styles.itemText}>
              Registration at: {user.registeredAt}
            </Text>
            <Button onPress={() => deleteUser(user.userId)} title="Delete" />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
