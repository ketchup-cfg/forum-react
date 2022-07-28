import styles from "./TopicListItem.module.css";
import { Topic } from "../../types";

const TopicListItem = ({ topic }: { topic: Topic }) => {
  return <li className={styles.topicSidebarItem}>{topic.name}</li>;
};

export default TopicListItem;
