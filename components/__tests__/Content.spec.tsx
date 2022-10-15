import React from "react";
import renderer from "react-test-renderer";
import Content from "../Content";

describe("Content Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<Content>test</Content>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<div
  className="css-1hlfwus"
>
  test
</div>
`);
    });
  });
});
