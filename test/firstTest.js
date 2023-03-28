const{Builder, By, Key} = require("selenium-webdriver");
require("chromedriver");

async function example(){
    //launching the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to the todo app
    await driver.get("https://lambdatest.github.io/sample-todo-app");

    //locate the input field and add a todo
    //*[@id="sampletodotext"]

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Cypress for E2E Testing", Key.ENTER);
    // await driver.findElement(By.id())

    await driver.sleep(10000)
    //close the browser
    await driver.quit();
}

example();