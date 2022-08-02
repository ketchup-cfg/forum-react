import { useState } from "react";
import styles from "./App.module.css";
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
    <div className={styles.appContainer} onClick={handleAppClick}>
      <div id="topicSidebar">{sidebarIsVisible && <TopicSidebar />}</div>
      <div className={styles.appCanvas}>
        <button
          className={styles.topicSidebarButton}
          type="button"
          id="topicSidebarButton"
          onClick={() => setSidebarVisibility(!sidebarIsVisible)}
        >
          <i className={`fa-solid fa-bars ${styles.icons}`}></i>
        </button>
        <main className={styles.mainWrapper}></main>
        <button
          className={styles.topicSidebarButton}
          type="button"
          onClick={() => alert("AHHHH")}
        >
          <i className={`fa-solid fa-bars ${styles.icons}`}></i>
        </button>
      </div>
    </div>
  );
};

export default App;
