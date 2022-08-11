import { useState, useEffect } from "react";
import { Topic } from "../../types";
import { fetchAllTopics } from "../../services/topics";
import TopicListItem from "./TopicListItem";

export const TopicSidebar = ({
  toggleVisibility,
}: {
  toggleVisibility: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [topics, setTopics] = useState<Topic[] | undefined>(undefined);

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
    };

    getTopics();
  }, []);

  return (
    <section className="h-full w-64 fixed z-1 top-0 left-0 overflow-x-hidden pt-16 duration-500 bg-slate-200 dark:bg-slate-800">
      <button
        className="absolute top-0 right-6 text-4xl ml-14"
        type="button"
        onClick={toggleVisibility}
      >
        &times;
      </button>
      <ul>
        <TopicListItem>
          <a className="py-2 pr-2 pl-8 text-lg block transition-300" href="/">
            Create New Topic
          </a>
        </TopicListItem>
        {topics?.map((topic) => (
          <TopicListItem key={topic.id}>
            <a className="py-2 pr-2 pl-8 text-lg block transition-300" href="/">
              {topic.name}
            </a>
          </TopicListItem>
        ))}
      </ul>
    </section>
  );
};
