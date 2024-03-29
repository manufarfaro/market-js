import React from "react";
import renderer from "react-test-renderer";
import AppTitle from "../AppTitle";

describe("AppTitle Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<AppTitle>test</AppTitle>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<h1
  className="css-1tj8294"
>
  test
</h1>
`);
    });
  });
});
