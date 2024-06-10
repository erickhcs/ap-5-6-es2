import { describe } from "node:test";
import renderer from "react-test-renderer";
import Deploy from "..";

describe("Deploy", () => {
  it("should render component properly", () => {
    const component = renderer.create(<Deploy />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
