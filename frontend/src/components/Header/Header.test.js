import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("Header is rendered on every page", () => {
  let currentPage = "";
  beforeEach(() => {
    for (let page of pageTypes) {
      currentPage = page;
      //console.log(currentPage);
    }
  });
  test(`Header renders on the ${currentPage}`, () => {
    render(<Component pageType={currentPage} />);
    const actual = screen.getByTestId('header-component');
    expect(actual).toBeInTheDocument();
  });
});