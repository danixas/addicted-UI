import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Bets from ".";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("Bets tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Bets />);
    expect(wrapper).not.toBeNull();
  });
});