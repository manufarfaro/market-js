import React from "react";
import renderer from "react-test-renderer";
import Input from "../Input";

describe("Input Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<Input type="text" value="test" />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <input
          className="sc-bdfBwQ brgUVj"
          type="text"
          value="test"
        />
      `);
    });
  });
});
