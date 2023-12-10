import Navbar from "./Navbar";
import css from "./header.module.scss";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <Navbar css={css} />
      </div>
    </header>
  );
};
export default Header;
