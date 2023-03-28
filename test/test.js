const { By } = require("selenium-webdriver");
const {Builder, Key} = require("selenium-webdriver");
require("chromedriver");

async function example(){
    //our search term
    var searchString = "Satyajit Ray";

    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    
    // Navigate to google
    await driver.get("https://google.com");

    //send the search string to the query field

    await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);;
    
    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log("Title is: ", title);

    //close the browser
    await driver.quit();

}

example();