import { Text, FlatList, View, StyleSheet } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () => {
  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListHeaderComponent={() => (
        <View style={StyleSheet.totalsContainer}>

        </View>

      )}
    />
  );
};

const styles = () => ({

}
)


export default ShoppingCart;
