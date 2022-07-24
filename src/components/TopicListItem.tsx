import { Topic } from "../types";

const TopicListItem = ({ topic }: { topic: Topic }) => {
  return <li>{topic.name}</li>;
};

export default TopicListItem;
