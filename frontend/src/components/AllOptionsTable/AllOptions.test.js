import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "../AllOptionsTable/index";
import { pageTypes } from "../../data/pageTypes";
import optionsArr from "../../data/optionsArr"

describe("AllOptions renders on correct pages", () => {
  let currentPage = "";
  const props = {
    optionsArr: [],
    votersArr: []
  };
  beforeEach(() => {
    for (let page of pageTypes) {
      currentPage = page;
      //console.log(currentPage);
    }
  });
  test(`AllOptions renders on correct pages ${currentPage}`, () => {
    render(<Component pageType={'pros-cons-vote'} optionsArr={props.optionsArr} votersArr={props.votersArr} />);
    const actual = screen.getByTestId('AllOptions')
    expect(actual).toBeInTheDocument();
  });
});
