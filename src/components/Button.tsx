export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      id="topicSidebarButton"
      className="rounded-lg bg-emerald-600 hover:bg-emerald-700 p-1.5"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
