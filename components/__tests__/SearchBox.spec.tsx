import React from "react";
import renderer, { act } from "react-test-renderer";
import SearchBox from "../SearchBox";

describe("SearchBox Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<SearchBox />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<div>
  <input
    className="css-pdy3o8"
    onChange={[Function]}
    placeholder="Search..."
    type="text"
    value=""
  />
</div>
`);
    });
  });
});
