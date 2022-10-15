import React from "react";
import renderer from "react-test-renderer";
import Input from "../Input";

describe("Input Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<Input type="text" value="test" />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<input
  className="css-pdy3o8"
  type="text"
  value="test"
/>
`);
    });
  });
});
