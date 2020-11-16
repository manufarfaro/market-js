import React from "react";
import renderer from "react-test-renderer";
import Card from "../Card";

describe("Card Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<Card>Test</Card>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <div
          className="sc-bdfBwQ hcOgCV"
        >
          Test
        </div>
      `);
    });
  });
});
