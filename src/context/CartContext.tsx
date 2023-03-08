import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CartITem } from "../interface/Interface";

export const AddCartContext = createContext({});

export function useCartcontext() {
  return useContext(AddCartContext);
}

function CartContext(props: any) {
  const [cartItems, setCartItems] = useState<CartITem[]>([]);

  const getItemQuantity = useCallback(
    (id: number) => {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    },
    [cartItems]
  );

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
  }, [cartItems]);

  const increaseCartQuantity = useCallback(
    (id: number) => {
      let exitenceItem = [...cartItems];
      var findItemIndex = cartItems.findIndex((item) => item.id === id);

      if (findItemIndex == -1) {
        setCartItems([...cartItems, { id, quantity: 1 }]);
      } else {
        exitenceItem[findItemIndex].quantity =
          exitenceItem[findItemIndex].quantity + 1;
        setCartItems(exitenceItem);
      }
    },
    [cartItems]
  );

  const decreaseCartQuantity = (id: number) => {
    let newCartItems = [...cartItems];
    let index = newCartItems.findIndex((item) => item.id === id);
    if (newCartItems[index]?.quantity == 1) {
      setCartItems(newCartItems.filter((item) => item.id != id));
    } else {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <AddCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        totalQuantity,
      }}
    >
      {props.children}
    </AddCartContext.Provider>
  );
}

export default CartContext;
