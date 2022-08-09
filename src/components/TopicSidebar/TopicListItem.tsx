const TopicListItem = ({ url, text }: { url: string; text: string }) => {
  return (
    <li className="h-8">
      <a href={url}>{text}</a>
    </li>
  );
};

export default TopicListItem;
