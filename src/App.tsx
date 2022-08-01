import { useState } from "react";
import styles from "./App.module.css";
import { TopicSidebar } from "./components/TopicSidebar";

const App = () => {
  const [sidebarIsVisible, setSidebarVisibility] = useState(false);
  return (
    <div className={styles.appContainer}>
      <div>{sidebarIsVisible && <TopicSidebar />}</div>
      <div className={styles.appCanvas}>
        <button
          className={styles.topicSidebarButton}
          type="button"
          onClick={() => setSidebarVisibility(!sidebarIsVisible)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <main></main>
        <button
          className={styles.topicSidebarButton}
          type="button"
          onClick={() => alert("AHHHH")}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
