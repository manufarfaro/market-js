import React from "react";
import renderer, { act } from "react-test-renderer";
import SearchBox from "../SearchBox";

describe("SearchBox Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<SearchBox />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <div>
          <input
            className="sc-bdfBwQ brgUVj"
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
