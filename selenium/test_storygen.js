const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/");

        const textbox = await driver.findElement(By.className("shadow"));
        await textbox.sendKeys("The lion and fox went to the market");
        await driver.sleep(2000);

        const button = await driver.findElement(By.className("bg-blue-500"));
        await button.click();

        // Wait for the story to be generated
        // You may need to modify this part based on how the story is generated in your React site
        await driver.wait(
            until.elementLocated(
                By.css(".mb-2.font-newfont.text-base.md\\:text-lg > strong")
            ),
            10000
        );
        await driver.sleep(10000); // Just an example wait time
    } finally {
        await driver.quit();
    }
}

example();
