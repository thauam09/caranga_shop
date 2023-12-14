import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../components/Button";
import Container from "../components/Container";

export default function Welcome({
  navigation,
}: NativeStackScreenProps<any, "Welcome">) {
  const handleGetStarted = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Container>
      <Text style={styles.title}>Best way to buy your dream car</Text>

      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo
        nesciunt tempore dolorem aut, reprehenderit labore adipisci at minus
        quibusdam magni vel nisi voluptas non fugit numquam! Fugiat, aliquid
        accusamus!
      </Text>

      <Button onPress={handleGetStarted}>Get Started</Button>
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
    marginTop: 16,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    borderRadius: 9999,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
