import React from "react";
import { render, screen } from "@testing-library/react";
import ChatWindow from "../components/ChatWindow";
import "@testing-library/jest-dom/extend-expect";

test("renders messages correctly", () => {
    const messages = ["Message 1", "Message 2"];
    render(<ChatWindow messages={messages} showInitialMessage={false} />);

    messages.forEach((message) => {
        const messageElement = screen.getByText(message);
        expect(messageElement).toBeInTheDocument();
    });
});
