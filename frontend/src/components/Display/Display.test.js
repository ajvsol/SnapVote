import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("Display is rendered on every page", () => {
  let currentPage = "";
  beforeEach(() => {
    for (let page of pageTypes) {
      currentPage = page;
      //console.log(currentPage);
    }
  });
  test(`Display renders on the ${currentPage}`, () => {
    render(<Component pageType={currentPage} />);
    const actual = screen.getByTestId('Display-components');
    expect(actual).toBeInTheDocument();
  });
});