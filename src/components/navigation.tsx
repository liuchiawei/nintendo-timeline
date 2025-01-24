import { LocaleSwitcher } from "./locale_switcher"
import ThemeToggle from "./theme_toggle"
 

export default function Navigation() {
  return (
    <div className="fixed top-4 right-4 z-50 flex justify-between items-center gap-2">
      <LocaleSwitcher />
      <ThemeToggle />
    </div>
  );
}
