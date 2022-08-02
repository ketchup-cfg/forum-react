import { Topic } from "../../types";

const TopicListItem = ({ topic }: { topic: Topic }) => {
  return <li className="topicSidebarItem">{topic.name}</li>;
};

export default TopicListItem;
