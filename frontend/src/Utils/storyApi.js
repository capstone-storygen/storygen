async function generateStory(prompt) {
    let apiUrl = "";

    if (process.env.DOCKER_ENV === "true") {
        apiUrl = `${
            process.env.BACKEND_URL || "http://backend:5000"
        }/api/story`;
    } else {
        apiUrl = `${
            process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"
        }/api/story`;
    }

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });
    if (!response.ok) {
        console.log("API URL:", apiUrl);
        throw new Error("Network response was not ok");
    }
    const data = await response.text();
    return data;
}

export default generateStory;
