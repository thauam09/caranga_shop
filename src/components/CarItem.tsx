import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CarItem() {
  return (
    <TouchableOpacity style={styles.carItem}>
      <Text>2023 Honda Civic Hatchback Sport Touring</Text>
      <View>
        <View>
          <Text>$32,800</Text>
          <Text>4.9</Text>
        </View>

        <View>{/* <Image source={} /> */}</View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  carItem: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    height: 150,
  },
});
