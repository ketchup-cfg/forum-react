import { useState } from "react";
import styles from "./App.module.css";
import { TopicSidebar } from "./components/TopicSidebar";

const App = () => {
  const [sidebarIsVisible, setSidebarVisibility] = useState(false);
  return (
    <div className={styles.appContainer}>
      {sidebarIsVisible && <TopicSidebar />}
      <div className={styles.appCanvas}>
        <button
          className={styles.topicSidebarButton}
          type="button"
          onClick={() => setSidebarVisibility(!sidebarIsVisible)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <main className={styles.appContent}></main>
      </div>
    </div>
  );
};

export default App;
