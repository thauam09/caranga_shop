import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface CircleButtonProps extends TouchableOpacityProps {
  iconName: string;
}

export default function CircleButton({ iconName, ...rest }: CircleButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <FontAwesome name={iconName} style={styles.showPasswordIcon} size={36} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    height: 80,
    width: 80,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 9999,
  },
  showPasswordIcon: {
    color: "#fff",
  },
});
