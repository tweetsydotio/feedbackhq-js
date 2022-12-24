"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackHqToggleWidgetVisibility = exports.feedbackHqIdentifyUser = void 0;
/**
 * Identify a user from in a FeedbackHQ embed
 * @param identifier
 */
const feedbackHqIdentifyUser = (identifier) => {
    const addIdentifierEvent = new CustomEvent("feedbackHqAddIdentifier", { bubbles: true, detail: identifier });
    window.dispatchEvent(addIdentifierEvent);
};
exports.feedbackHqIdentifyUser = feedbackHqIdentifyUser;
/**
 * Toggle the visibility of the FeedbackHQ widget
 * @param isVisible
 */
const feedbackHqToggleWidgetVisibility = (isVisible) => {
    const iframe = document.getElementById("feedbackhq-widget");
    if (iframe) {
        if (isVisible) {
            iframe.style.display = "block";
        }
        else {
            iframe.style.display = "none";
        }
    }
};
exports.feedbackHqToggleWidgetVisibility = feedbackHqToggleWidgetVisibility;
