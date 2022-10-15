import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

describe("Button Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<Button>Test</Button>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<button
  className="css-aketrl"
>
  Test
</button>
`);
    });
  });
});
