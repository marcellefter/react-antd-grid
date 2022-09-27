import * as React from "react";
import { render } from "@testing-library/react";

import "jest-canvas-mock";

import { Row, Col } from "../src";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Common render", () => {
  it("renders without crashing", () => {
    render(
      <Row>
        <Col>Column</Col>
      </Row>,
    );
  });
});
