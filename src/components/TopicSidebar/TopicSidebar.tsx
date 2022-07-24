import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import TopicListItem from "./TopicListItem";

export const TopicSidebar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      const response = await fetch("http://localhost:3001/topics");
      const fetchedTopics = await response.json();
      setTopics(fetchedTopics);
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
          <TopicListItem topic={topic} />
        ))}
      </List>
    </Drawer>
  );
};
