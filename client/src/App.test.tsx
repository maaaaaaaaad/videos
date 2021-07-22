import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App/> message then rendering", () => {
  //
  it("should be a message is Set up! on html", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("section").contains("Set up!")).toBe(true);
  });
});
