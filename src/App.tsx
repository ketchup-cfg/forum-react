import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TopicListItem from "./components/TopicListItem";

function App() {
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
    return <div>Loading...</div>;
  }

  return (
    <List>
      {topics.map((topic) => (
        <TopicListItem topic={topic} />
      ))}
    </List>
  );
}

export default App;
