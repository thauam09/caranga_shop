import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import Container from "../components/Container";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

export default function SignIn({
  navigation,
}: NativeStackScreenProps<any, "SignIn">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={styles.textInput}
          placeholder="username"
          placeholderTextColor="#000"
        />

        <PasswordInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="password"
          placeholderTextColor="#000"
        />

        <Button onPress={handleLogin}>Login</Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
  },
  loginContainer: {
    marginTop: "auto",
    gap: 16,
  },
  textInput: {
    height: 40,
    padding: 12,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 9999,
  },
  passwordInputContainer: {
    flexDirection: "row",
  },
  passwordTextInput: {
    padding: 12,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 9999,
    flex: 1,
  },
  showPasswordIcon: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -7 }],
  },
});
