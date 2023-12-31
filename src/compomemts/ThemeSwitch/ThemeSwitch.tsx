import styles from './toggle.module.scss';
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";
import * as Toggle from "@radix-ui/react-toggle";

function ThemeSwitch({toggleTheme, isLightTheme}) {
  const isLight = isLightTheme;
  const Icon = isLight ? MdLightMode : MdOutlineNightlightRound;

  return (
      <Toggle.Root
      pressed={isLight}
      onPressedChange={toggleTheme}
      className={styles.toggle} aria-label="Toggle italic">
        <Icon style={{ fontSize: "18px" }} />
      </Toggle.Root>
  );
}

export default ThemeSwitch;
