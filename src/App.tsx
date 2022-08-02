import { useState } from "react";
import { TopicSidebar } from "./components/TopicSidebar";

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
    <div className="appContainer" onClick={handleAppClick}>
      <div id="topicSidebar">{sidebarIsVisible && <TopicSidebar />}</div>
      <div className="appCanvas">
        <button
          className="topicSidebarButton"
          type="button"
          id="topicSidebarButton"
          onClick={() => setSidebarVisibility(!sidebarIsVisible)}
        >
          <i className="fa-solid fa-bars icons"></i>
        </button>
        <main className="mainWrapper"></main>
        <button
          className="topicSidebarButton"
          type="button"
          onClick={() => alert("AHHHH")}
        >
          <i className="fa-solid fa-bars icons"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
