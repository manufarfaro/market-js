import React from "react";
import renderer from "react-test-renderer";
import ProductGrid from "../ProductGrid";
import Product from "../../model/Product";

const productsMock: Product[] = [
  {
    id: 0,
    name: "test",
    description: "test",
    pictureUrl: "url",
    active: true,
    price: 0.0,
  },
];

describe("Content Component", () => {
  let target: any;

  describe("when called without products", () => {
    beforeEach(() => {
      target = renderer.create(<ProductGrid products={[]} />).toJSON();
    });

    it("should not render the component", () => {
      expect(target).toMatchInlineSnapshot(`null`);
    });
  });

  describe("when called with products", () => {
    beforeEach(() => {
      target = renderer
        .create(<ProductGrid products={productsMock} />)
        .toJSON();
    });

    it("should not render the component", () => {
      expect(target).toMatchInlineSnapshot(`
<div
  className="css-eaqxda"
>
  <div>
    test
     - $
    0
  </div>
  <div>
    <img
      alt="test"
      className="css-1yxy2io"
      src="url"
    />
  </div>
  <div>
    test
  </div>
</div>
`);
    });
  });
});
