export const addItemToCart = (cartItems, cartItemATodd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemATodd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemATodd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemATodd, quantity: 1 }];
};
