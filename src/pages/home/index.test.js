import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from ".";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Bets tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).not.toBeNull();
  });
});