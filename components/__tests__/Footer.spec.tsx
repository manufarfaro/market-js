import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe("Footer Component", () => {
  let target: any;
  beforeEach(() => {
    target = renderer.create(<Footer />).toJSON();
  });

  describe("when called", () => {
    it("should render as expected", () => {
      expect(target).toMatchInlineSnapshot(`
<footer
  className="css-3ncpyu"
>
  <a
    className="css-2mvpv1"
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
