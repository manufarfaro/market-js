import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link";

describe("Link Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<Link href="#">test</Link>).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <a
          className="sc-bdfBwQ gMhHJJ"
          href="#"
        >
          test
        </a>
      `);
    });
  });
});
