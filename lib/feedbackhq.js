"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackHqIdentifyUser = void 0;
/**
 * Identify a user from in a FeedbackHQ embed
 * @param identifier
 */
const feedbackHqIdentifyUser = (identifier) => {
    const addIdentifierEvent = new CustomEvent("feedbackHqAddIdentifier", { bubbles: true, detail: identifier });
    window.dispatchEvent(addIdentifierEvent);
};
exports.feedbackHqIdentifyUser = feedbackHqIdentifyUser;
