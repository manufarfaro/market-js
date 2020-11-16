import React from "react";
import renderer from "react-test-renderer";
import AppHeader from "../AppHeader";

describe("AppHeader Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<AppHeader />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <header
          className="sc-bdfBwQ bKYtbX"
        >
          <h1
            className="sc-gsTCUz jhehbE"
          >
            MarketJS
          </h1>
          <div>
            <input
              className="sc-dlfnbm izYBcg"
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
