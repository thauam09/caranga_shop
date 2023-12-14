import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";

type ContainerProps = {
  children: React.ReactNode;
  padding?: number;
  scroll?: boolean;
};

export default function Container({
  padding,
  scroll = false,
  children,
}: ContainerProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        {scroll ? (
          <ScrollView
            style={{ ...styles.container, ...(padding && { padding }) }}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={{ ...styles.container, ...(padding && { padding }) }}>
            {children}
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#161616",
  },
  container: {
    marginTop: "auto",
    padding: 48,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 16,
  },
  formContainer: {
    marginVertical: 16,
    gap: 16,
  },
  textInput: {
    padding: 12,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 9999,
  },
  button: {
    backgroundColor: "#fff",
    padding: 24,
    alignItems: "center",
    borderRadius: 9999,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
