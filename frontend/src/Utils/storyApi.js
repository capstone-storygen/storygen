async function generateStory(prompt) {
    const response = await fetch("/api/story", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.text();
    return data;
}

export default generateStory;
