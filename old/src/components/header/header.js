import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/user";
import { uiActions } from "../../store/slices/ui-slice";
import { Link } from "react-router-dom";
import style from "./header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);
  const uiReducer = useSelector((state) => state.uiReducer);

  const handleAuth = () => {
    authReducer.isAuthenticeted
      ? dispatch(authActions.logout())
      : dispatch(authActions.login());
  };

  const toggleCart = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <header className={style.title}>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <button onClick={handleAuth}>
          {authReducer.isAuthenticeted ? "Logout" : "Login"}
        </button>
        {authReducer.isAuthenticeted && <span>{authReducer.userName}</span>}

        <div>{uiReducer.cartIsVisible ? "Cart" : "n"}</div>
        <div>
          <button onClick={toggleCart}>Toggle Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
