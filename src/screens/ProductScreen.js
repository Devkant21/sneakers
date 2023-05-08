import { StyleSheet, View, Image, FlatList } from "react-native";
import product from "../data/products";

const ProductScreen = () => {
  return (
    <FlatList
      data={product}
      renderItems={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductScreen;
