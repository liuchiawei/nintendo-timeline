import ThemeToggle from "./theme_toggle";
import NavLink from "./navLink";

export default function Nav() {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-4 flex items-center *:text-sm *:hover:text-underline">
      <NavLink href="/" locale="ja">JA</NavLink>
      <NavLink href="/" locale="en">EN</NavLink>
      <NavLink href="/" locale="zh">ZH</NavLink>
      <ThemeToggle />
    </div>
  );
}
