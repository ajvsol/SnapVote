import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "./index";
import { pageTypes } from "../../data/pageTypes";

describe("SingleInputBox renders on the correct pages", () => {
  let currentPage = "";

  beforeEach(() => {
    for (let i = 0; i < 2; i++) {
      currentPage = pageTypes[i];
    }

    // pageTypes[0]
    // pageTypes[1]

  });
  test(`SingleInputBox renders on the ${currentPage}`, () => {
    render(<Component pageType={currentPage} />);
    const button = screen.getByRole("textbox");
    expect(button).toBeInTheDocument();
  });
});
