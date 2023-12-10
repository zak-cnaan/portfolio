import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";

const CartPage = () => {
    const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.cartInput.value)
    dispatch(cartActions.addItemToCart({
        id: Math.random(),
        name: e.target.cartInput.value
    }))

    e.target.cartInput.value = "";

  };

  const handleRemove = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <div className="container">
      <h1>Cart Page</h1>
      <h2>Add to cart:</h2>
      <form onSubmit={submitForm}>
        <input type="text" name="cartInput"></input>
      </form>
      {cartReducer.items.map((item) => (
        <li key={item.id}><button onClick={() => handleRemove(item.id)}>Remove</button> {item.name}</li>
      ))}
    </div>
  );
};

export default CartPage;
