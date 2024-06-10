import { describe } from "node:test";
import renderer from "react-test-renderer";
import Docs from "..";

describe("Docs", () => {
  it("should render component properly", () => {
    const component = renderer.create(<Docs />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
