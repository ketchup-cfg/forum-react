import { NavbarItem } from "./NavbarItem";
import { Button } from "../Button";

export const Navbar = ({
  toggleTopicSidebar,
}: {
  toggleTopicSidebar: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <nav className="w-full bg-slate-200 dark:bg-slate-800">
      <ul>
        <NavbarItem>
          <Button onClick={toggleTopicSidebar} text={"Topics"} />
        </NavbarItem>
      </ul>
    </nav>
  );
};
