import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../components/navBar";

// Mock the fetch function
global.fetch = jest.fn(() => Promise.resolve());

test("clicking on Storyverse logo resets messages and shows initial message", () => {
    const setShowAboutUs = jest.fn();
    const setShowInitialMessage = jest.fn();
    const resetMessages = jest.fn();
    const airesp = jest.fn();
    const setAiresp = jest.fn();
    render(
        <NavBar
            setShowAboutUs={setShowAboutUs}
            setShowInitialMessage={setShowInitialMessage}
            resetMessages={resetMessages}
            airesp={airesp}
            setAiresp={setAiresp}
        />
    );

    fireEvent.click(screen.getByText("Storyverse"));

    // Ensure setShowInitialMessage is called with true
    expect(setShowInitialMessage).toHaveBeenCalledWith(true);

    // Ensure resetMessages is called
    expect(resetMessages).toHaveBeenCalled();
});
