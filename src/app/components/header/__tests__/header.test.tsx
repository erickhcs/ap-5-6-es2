import { describe } from "node:test";
import renderer from "react-test-renderer";
import Header from "..";

describe("Header", () => {
  it("should render component properly", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
