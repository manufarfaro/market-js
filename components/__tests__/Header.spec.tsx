import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("Header Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<Header>test</Header>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <header
          className="sc-bdfBwQ bKYtbX"
        >
          test
        </header>
      `);
    });
  });
});
