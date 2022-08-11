export const Button = ({
  color,
  label,
  padding,
  fontSize,
  margin,
  position,
  onClick,
}: {
  color: string;
  label: string;
  padding?: string;
  fontSize: string;
  margin: string;
  position?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      id="topicSidebarButton"
      className={`${position} ${color} ${padding} ${margin} ${fontSize}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
