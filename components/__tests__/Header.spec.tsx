import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("Header Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<Header>test</Header>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<header
  className="css-1u72xci"
>
  test
</header>
`);
    });
  });
});
