const{Builder, By, Key} = require("selenium-webdriver");
require("chromedriver");
var should = require("chai").should();

//describe block

describe("add todo tests", ()=>{
    //it block
    it("successfully adds a todo to application", async function(){
        //launching the browser
        let driver = await new Builder().forBrowser("chrome").build();
        let inputString = "Learn Cypress for E2E Testing";
        //navigate to the todo app
        await driver.get("https://lambdatest.github.io/sample-todo-app");

        //locate the input field and add a todo
        //*[@id="sampletodotext"]
        
        await driver.findElement(By.id("sampletodotext")).sendKeys(inputString, Key.ENTER);

        //assertion using chai
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){return value});
        todoText.should.equal(inputString);
    
        // await driver.findElement(By.id())
        //close the browser
        await driver.quit();
    });
})




    
