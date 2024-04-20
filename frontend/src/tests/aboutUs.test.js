import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "../components/aboutUs";
import "@testing-library/jest-dom/extend-expect";

describe("AboutUs component", () => {
    test("renders component without crashing", () => {
        render(<AboutUs />);
    });

    test('renders heading "Why choose us?"', () => {
        const { getByText } = render(<AboutUs />);
        const headingElement = getByText(/Why choose us?/i);
        expect(headingElement).toBeInTheDocument();
    });

    test("renders API information", () => {
        const { getByText } = render(<AboutUs />);
        const apiHeading = getByText(/Powerful API/i);
        const apiDescription = getByText(/Our webapp is built on chatGPT API/i);
        expect(apiHeading).toBeInTheDocument();
        expect(apiDescription).toBeInTheDocument();
    });

    test("renders Infinite possibilities information", () => {
        const { getByText } = render(<AboutUs />);
        const infiniteHeading = getByText(/Infinite possibilities/i);
        const infiniteDescription = getByText(/Write intricate stories/i);
        expect(infiniteHeading).toBeInTheDocument();
        expect(infiniteDescription).toBeInTheDocument();
    });
});
