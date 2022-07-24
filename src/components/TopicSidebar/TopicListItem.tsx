import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Topic } from "../../types";

const TopicListItem = ({ topic }: { topic: Topic }) => {
  return (
    <ListItem>
      <ListItemButton component="a" href="#">
        <ListItemText primary={`+ ${topic.name}`} />
      </ListItemButton>
    </ListItem>
  );
};

export default TopicListItem;
