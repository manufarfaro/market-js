import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe("Footer Component", () => {
  let target;
  beforeEach(() => {
    target = renderer.create(<Footer />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
        <footer
          className="sc-gsTCUz kJTZYS"
        >
          <a
            className="sc-bdfBwQ gMhHJJ"
            href="https://github.com/manufarfaro"
            target="_blank"
          >
            @manufarfaro
          </a>
        </footer>
      `);
    });
  });
});
