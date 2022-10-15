import React from "react";
import renderer from "react-test-renderer";
import Card from "../Card";

describe("Card Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<Card>Test</Card>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<div
  className="css-eaqxda"
>
  Test
</div>
`);
    });
  });
});
