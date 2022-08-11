export const TopicSidebarLink = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <a className="py-2 pr-2 pl-8 text-lg block" href={href}>
      {text}
    </a>
  );
};
