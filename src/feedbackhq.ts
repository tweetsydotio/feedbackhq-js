/**
 * Identify a user from in a FeedbackHQ embed
 * @param identifier
 */
export const feedbackHqIdentifyUser = (identifier: string) => {
  const addIdentifierEvent = new CustomEvent("feedbackHqAddIdentifier", {detail: identifier});
  window.dispatchEvent(addIdentifierEvent);
};
