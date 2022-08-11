import { useState, useEffect } from "react";
import { Topic } from "../../types";
import { fetchAllTopics } from "../../services/topics";
import { TopicSidebarItem } from "./TopicSidebarItem";
import { TopicSidebarLink } from "./TopicSidebarLink";
import { Button } from "./../Button";

export const TopicSidebar = ({
  closeTopicSidebar,
}: {
  closeTopicSidebar: React.MouseEventHandler<HTMLButtonElement>;
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
    <section className="h-full w-64 fixed z-1 top-0 left-0 overflow-x-hidden pt-16 bg-slate-200 dark:bg-zinc-900">
      <Button
        onClick={closeTopicSidebar}
        label="&times;"
        fontSize="text-4xl"
        color="bg-transparent"
        margin="ml-14"
        position="absolute top-0 right-6"
      />
      <ul>
        <TopicSidebarItem>
          <TopicSidebarLink href="/" text="Create New Topic" />
        </TopicSidebarItem>
        {topics?.map((topic) => (
          <TopicSidebarItem key={topic.id}>
            <TopicSidebarLink href="/" text={topic.name} />
          </TopicSidebarItem>
        ))}
      </ul>
    </section>
  );
};
