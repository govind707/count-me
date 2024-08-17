import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { useUserStore } from "../../utils/store";


export const History = () => {
  const { registrationHistory, user, deleteUser } = useUserStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registration History</Text>
        <Text style={styles.totalCount}>
          Total Registrations: {registrationHistory.length}
        </Text>
      </View>
      {registrationHistory.length === 0 ? (
        <Text style={styles.emptyText}>No registrations found.</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {registrationHistory.map(
            ({ registeredAt, userId, firstName }, index) => {
              if (user.isAdmin) {
                return (
                  <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>
                      {firstName} at: {registeredAt}
                    </Text>
                    <View style={{ marginTop: 6 }}>
                      <Button
                        onPress={() => deleteUser(userId)}
                        title="Delete"
                      />
                    </View>
                  </View>
                );
              } else if (userId === user.userId) {
                return (
                  <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>
                      Registration at: {registeredAt}
                    </Text>
                    <View style={{ marginTop: 6 }}>
                      <Button
                        onPress={() => deleteUser(userId)}
                        title="Delete"
                      />
                    </View>
                  </View>
                );
              }
            }
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#007BFF",
  },
  totalCount: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },
  scrollContainer: {
    flexGrow: 1,
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
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});
