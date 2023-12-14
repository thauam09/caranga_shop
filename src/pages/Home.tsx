import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../components/Button";
import Container from "../components/Container";
import CircleButton from "../components/CircleButton";
import CarItem from "../components/CarItem";

export default function Home({
  navigation,
}: NativeStackScreenProps<any, "Home">) {
  const handleGetStarted = () => {
    navigation.navigate("Welcome");
  };

  return (
    <Container padding={28} scroll>
      <View style={styles.header}>
        <CircleButton
          iconName="chevron-left"
          onPress={() => navigation.goBack()}
        />

        <CircleButton iconName="plus" onPress={() => navigation.goBack()} />
      </View>
      <Text>Home</Text>

      <View style={styles.listContainer}>
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <CarItem />
        <Button onPress={handleGetStarted}>Get Started</Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  listContainer: {
    gap: 24,
    paddingBottom: 50,
  },
});
