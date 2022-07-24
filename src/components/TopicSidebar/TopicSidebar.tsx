import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import { Topic } from "../../types";
import { fetchAllTopics } from "../../services/topics";
import TopicListItem from "./TopicListItem";

export const TopicSidebar = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const getTopics = async () => {
      const fetchedTopics = await fetchAllTopics();

      if (fetchedTopics) {
        setTopics(fetchedTopics);
      }
    };
    getTopics();
  }, []);

  if (!topics) {
    return <CircularProgress />;
  }

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {topics.map((topic) => (
          <TopicListItem key={topic.id} topic={topic} />
        ))}
      </List>
    </Drawer>
  );
};
