import { Topic } from "../../types";

const TopicListItem = ({ topic }: { topic: Topic }) => {
  return (
    <li className="topicSidebarItem">
      <a href="/">{topic.name}</a>
    </li>
  );
};

export default TopicListItem;
