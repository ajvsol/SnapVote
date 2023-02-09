import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("submit button renders on all pages", () => {
  const props = {
    onClick: jest.fn()
  };

  let currentPage = "";

  beforeEach(() => {
    for (let page of pageTypes) {
      currentPage = page;
      //console.log(currentPage);
    }
  });

  test(`Submit button renders on the ${currentPage}`, () => {
    render(<Component pageType={currentPage} />);
    const actual = screen.getByRole("button");
    expect(actual).toBeInTheDocument();
  });

});
