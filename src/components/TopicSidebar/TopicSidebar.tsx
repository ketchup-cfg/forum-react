import { useState, useEffect } from "react";
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
    <section className="absolute z-10 ml-4 w-max h-max bg-slate-200 dark:bg-slate-800 pl-2 pr-5">
      <ul>
        <TopicListItem url="/" text="Create New Topic" />
        <li>
          <hr className="h-1" />
        </li>
        {isLoading && <li>Loading...</li>}
        {topics?.map((topic) => (
          <TopicListItem key={topic.id} url="/" text={topic.name} />
        ))}
      </ul>
    </section>
  );
};
