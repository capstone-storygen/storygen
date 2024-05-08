const { Builder, By, Key, until } = require("selenium-webdriver");

async function generateStory(driver, storyText) {
    try {
        const textbox = await driver.findElement(By.className("shadow"));
        await driver.sleep(1000);

        await textbox.sendKeys(storyText);
        await driver.sleep(2000);

        const button = await driver.findElement(By.className("bg-blue-500"));
        await button.click();

        // Wait for the story to be generated
        await driver.wait(
            until.elementLocated(
                By.css(".mb-2.font-newfont.text-base.md\\:text-lg > strong")
            ),
            15000
        );
        await driver.sleep(10000);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

async function run() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/");
        await generateStory(
            driver,
            "Once upon a time there was a man named Armin who decided on becoming the most powerful hero the World has ever seen"
        );
        await generateStory(
            driver,
            "He has the ability to control water and to hone this ability he went to a city called Atlasia where he met an old man who was a previous Hero and a great teacher so he decided to become his Disciple"
        );
        await generateStory(
            driver,
            "A villain named Goza attacks the city and faces Armin"
        );
        await generateStory(
            driver,
            "End the story with Armin becoming the Hero"
        );
        await driver.sleep(2000);
        const downloadButton = await driver.findElement(
            By.className("bg-green-400")
        );
        await downloadButton.click();
        await driver.sleep(2000);
    } finally {
        await driver.quit();
    }
}

run();
