import React from "react";
import renderer from "react-test-renderer";
import AppContainer from "../AppContainer";

describe("AppContainer Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<AppContainer>test</AppContainer>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<div
  className="css-f4vbag"
>
  test
</div>
`);
    });
  });
});
