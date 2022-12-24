/**
 * Identify a user from in a FeedbackHQ embed
 * @param identifier
 */
export const feedbackHqIdentifyUser = (identifier: string) => {
  const addIdentifierEvent = new CustomEvent("feedbackHqAddIdentifier", {bubbles: true, detail: identifier});
  window.dispatchEvent(addIdentifierEvent);
};

export const feedbackHqToggleWidgetVisibility = (isVisible: boolean) => {
  const iframe = document.getElementById("feedbackhq-widget");

  if (iframe) {
    if (isVisible) {
      iframe.style.display = "block";
    } else {
      iframe.style.display = "none";
    }
  }
};
