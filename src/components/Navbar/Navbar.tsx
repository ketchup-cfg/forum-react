import { NavbarItem } from "./NavbarItem";

export const Navbar = ({
  toggleTopicSidebar,
}: {
  toggleTopicSidebar: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <nav className="flex flex-wrap justify-start gap-4 py-4 px-4">
      <NavbarItem onClick={toggleTopicSidebar} text={"Topics"} />
    </nav>
  );
};
