import { useState, useEffect } from "react";
import styles from "./TopicSidebar.module.css";
import { Topic } from "../../types";
import { fetchAllTopics } from "../../services/topics";
import TopicListItem from "./TopicListItem";

export const TopicSidebar = () => {
  const [topics, setTopics] = useState<Topic[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const fetchedTopics = await fetchAllTopics();

        if (fetchedTopics) {
          setTopics(fetchedTopics);
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    setLoading(true);
    getTopics();
  }, []);

  return (
    <section className={styles.topicSidebar}>
      <h2>Topics</h2>
      <hr />
      <ul className={styles.topicSidebarList}>
        {isLoading && <li>Loading...</li>}
        {topics?.map((topic) => (
          <TopicListItem key={topic.id} topic={topic} />
        ))}
      </ul>
    </section>
  );
};
