import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChatInput from "../components/ChatInput";

test("renders input field", () => {
    render(<ChatInput />);
    const input = screen.getByPlaceholderText(
        /Write from where the story should begin/i
    );
    expect(input).toBeInTheDocument();
});

test("calls onSubmit prop with user input", () => {
    const onSubmit = jest.fn();
    render(<ChatInput onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText(
        /Write from where the story should begin/i
    );
    fireEvent.change(input, { target: { value: "Once upon a time" } });
    fireEvent.submit(screen.getByRole("button", { name: /Generate/i })); // Assuming the button has the text "Generate"
    expect(onSubmit).toHaveBeenCalledWith("Once upon a time");
});
