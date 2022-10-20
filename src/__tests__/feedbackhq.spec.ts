import {feedbackHqIdentifyUser} from "../feedbackhq";
test("feedbackhq.ts", () => {
  const dispatchEventSpy = jest.spyOn(window, "dispatchEvent");

  feedbackHqIdentifyUser("identifier");

  expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
});
