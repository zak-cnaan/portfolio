import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavLinks = ({itemVariant}) => {
  const headerSlice = useSelector((state) => state.headerReducer);

  return (
    <ul>
      {headerSlice.menuItems.map((i) => (
        <motion.li key={i.to} variants={itemVariant}>
          <Link to={i.to}>{i.text}</Link>
        </motion.li>
      ))}
    </ul>

  );
};
export default NavLinks;
