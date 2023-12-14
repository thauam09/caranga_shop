import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

interface PasswordInputProps extends TextInputProps {
  iconSize?: number;
}

export default function PasswordInput({
  iconSize = 14,
  value,
  ...rest
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.passwordInputContainer}>
      <TextInput
        secureTextEntry={!showPassword}
        style={styles.passwordTextInput}
        {...rest}
      />
      <FontAwesome
        onPress={() => setShowPassword(!showPassword)}
        name={showPassword ? "eye-slash" : "eye"}
        style={styles.showPasswordIcon}
        size={iconSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passwordInputContainer: {
    flexDirection: "row",
  },
  passwordTextInput: {
    height: 40,
    padding: 12,
    paddingRight: 36,
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
