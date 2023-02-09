import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("PageHeader renders on all pages", () => {
  let currentPage = "";
  beforeEach(() => {
    for (let page of pageTypes) {
      currentPage = page;
      //console.log(currentPage);
    }
  });
  test(`PageHeader renders on the ${currentPage}`, () => {
    render(<Component pageType={currentPage} />);
    const actual = screen.getByRole("heading");
    expect(actual).toBeInTheDocument();
  });
});
