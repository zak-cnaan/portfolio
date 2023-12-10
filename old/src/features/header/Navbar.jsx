import NavLinks from "./NavLinks";
import LogoLink from "./LogoLink";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MenuToggle } from "./MenuToggle";
import navbarCss from "./navbar.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "./header-slice";

const containerVariant = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
  exit: { opacity: 0, y: 0, transition: { duration: 0.2 } },
};

const itemVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = ({ css }) => {
  const { isTopMenuOpen: isOpen } = useSelector((state) => state.headerReducer);
  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(headerActions.toggle_isTopMenuOpen());
  };

  return (
    <div className={css.navbar}>
      <LogoLink css={css} />
      <nav aria-label="Main Navigation" className={css.menu}>
        <NavLinks />
      </nav>

      <div className={css.DropdownMenu}>
        <DropdownMenu.Root open={isOpen} modal={false}>
          <DropdownMenu.Trigger asChild>
            <button
              className={navbarCss.IconButton}
              aria-label="Customise options"
              onClick={toggleOpen}
            >
              <MenuToggle isOpen={isOpen} />
            </button>
          </DropdownMenu.Trigger>

          <AnimatePresence>
            {isOpen && (
              <DropdownMenu.Content forceMount align="end" sideOffset={18}>
                <motion.div
                  className={navbarCss.DropdownMenuContent}
                  variants={containerVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 2 }}
                >
                  <nav aria-label="Main Navigation" className={css.mobileMenu}>
                    <NavLinks itemVariant={itemVariant} />
                  </nav>
                </motion.div>
              </DropdownMenu.Content>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Navbar;
