import React from "react";
import renderer from "react-test-renderer";
import AppHeader from "../AppHeader";

describe("AppHeader Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<AppHeader />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<header
  className="css-1u72xci"
>
  <h1
    className="css-1tj8294"
  >
    MarketJS
  </h1>
  <div>
    <input
      className="css-pdy3o8"
      onChange={[Function]}
      placeholder="Search..."
      type="text"
      value=""
    />
  </div>
</header>
`);
    });
  });
});
