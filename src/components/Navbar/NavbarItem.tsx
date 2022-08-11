import { Button } from "../Button";

export const NavbarItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      onClick={onClick}
      label={text}
      fontSize="text-xl"
      color="bg-transparent"
      padding="p-0"
      margin="m-0"
    />
  );
};
