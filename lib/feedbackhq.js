"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackHqIdentifyUser = void 0;
/**
 * Attach an identifier to a user's feedback from the FeedbackHQ widget
 * @param identifier
 */
const feedbackHqIdentifyUser = (identifier) => {
    const addIdentifierEvent = new CustomEvent("feedbackHqAddIdentifier", { detail: identifier });
    window.dispatchEvent(addIdentifierEvent);
};
exports.feedbackHqIdentifyUser = feedbackHqIdentifyUser;
