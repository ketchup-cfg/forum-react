import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import CircularProgress from "@mui/material/CircularProgress";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
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

  if (isLoading) {
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
        {typeof topics === "undefined" ? (
          <ListItem>
            <ListItemText primary="No topics listed" />
          </ListItem>
        ) : (
          topics.map((topic) => <TopicListItem key={topic.id} topic={topic} />)
        )}
      </List>
    </Drawer>
  );
};
