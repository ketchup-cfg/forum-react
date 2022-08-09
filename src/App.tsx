import { useState } from "react";
import { TopicSidebar } from "./components/TopicSidebar";
import { Navbar } from "./components/Navbar";
import "./index.css";

const topicSidebarWasClicked = (node: Node) => {
  const topicSidebar = document.querySelector("#topicSidebar");
  const topicSidebarButton = document.querySelector("#topicSidebarButton");

  return !topicSidebar?.contains(node) && !topicSidebarButton?.contains(node);
};

const App = () => {
  const [sidebarIsVisible, setSidebarVisibility] = useState(false);

  const handleAppClick = (event: React.MouseEvent<HTMLElement>) => {
    if (topicSidebarWasClicked(event.target as Node)) {
      setSidebarVisibility(false);
    }
  };

  return (
    <div onClick={handleAppClick}>
      <Navbar
        toggleTopicSidebar={() => setSidebarVisibility(!sidebarIsVisible)}
      />
      {sidebarIsVisible && <TopicSidebar />}
      <main className={`m-auto w-3/4 ${sidebarIsVisible ? "blur" : ""}`}></main>
    </div>
  );
};

export default App;
