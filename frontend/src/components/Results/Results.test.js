import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("Results renders on the correct pages", () => {;
  const props = {
    optionsArr: []
  }

  test(`Results renders on the ${pageTypes}`, () => {
    render(<Component pageType={pageTypes[6]} optionsArr={props.optionsArr} />);
    console.log(pageTypes[6]);
    const actual = screen.getByTestId("results-container");
    expect(actual).toBeInTheDocument();
  });

  // test(`Results renders on the ${pageTypes[10]}`, () => {
  //   render(<Component pageType={pageTypes[10]} />);
  //   const actual = screen.getByRole("heading");
  //   expect(actual).toBeInTheDocument();
  // });
});