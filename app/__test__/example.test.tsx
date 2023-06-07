import React from "react";
import { screen, render } from "@testing-library/react";
import { Link } from "@remix-run/react";
import { unstable_createRemixStub } from "@remix-run/testing";

function sum(a: number, b: number) {
  return a + b;
}

describe("example1", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("example2", () => {
  test("rendering", () => {
    const RemixStub = unstable_createRemixStub([
      {
        path: "/us",
        loader: () => {},
        element: (
          <div data-testid="aa">
            <Link to="aa">Link</Link>
            aaaa
          </div>
        ),
      },
    ]);

    render(
      <RemixStub
        initialEntries={["/us"]}
        hydrationData={{ loaderData: { "/us": {} } }}
      />
    );

    expect(screen.getByTestId("aa")).toHaveTextContent("aaaa");
    expect(screen.getByTestId("aa")).toHaveTextContent("Link");
  });
});
