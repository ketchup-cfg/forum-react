import { Topic } from "../types";
import { remoteBaseUrl } from "../constants";

export const fetchAllTopics = async (): Promise<Topic[] | undefined> => {
  try {
    const response = await fetch(`${remoteBaseUrl}/topics`);
    const topics = await response.json();

    return topics;
  } catch (e) {
    console.error(e);

    return undefined;
  }
};
